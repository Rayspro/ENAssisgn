const UserModel = require("../Model/User.model");
const { genHash } = require("../Util/GenrateHash");

class UserService{
  findOneAndModifyUser(condition, value) {
    return new Promise(async (resolve, reject) => {
      try {
        const User = await UserModel.findOneAndUpdate(condition, { $set: value },{useFindAndModify: false,new: true}).select({uname:1,fname:1,lname:1,email:1});
        resolve(User);
      } catch (err) {
        console.log(err)
        reject(false);
      }
    });
  }
  
  CreateUser(value) {
    return new Promise(async (resolve, reject) => {
      try {
        const hash = await genHash(value.password);
        const User = new UserModel({ ...value, password: hash });
        User.save((err, userData) => {
          if (!!err) {
            reject(false);
          } else {
            resolve(userData);
          }
        });
      } catch (err) {
        reject(false)
      }
    });
  }
  
  findAllUser(pageNo) {
    return new Promise(async (resolve, reject) => {
      try {
        const limitDoc = 10;
        const skip = (pageNo-1)*limitDoc;
        const count = await UserModel.countDocuments();
        const User = await UserModel.find({}).sort({_id:-1}).skip(skip).limit(limitDoc);
        console.log(limitDoc, skip, User)
        resolve({users:User, totalPage:parseInt(count/10)+1});
      } catch (err) {
        reject(false);
      }
    });
  }
  
  DeleteOneUser(condition) {
    return new Promise(async (resolve, reject) => {
      try {
        const User = await UserModel.findOneAndDelete(condition);
        resolve(User);
      } catch (err) {
        reject(false);
      }
    });
  }
}

module.exports = UserService;
