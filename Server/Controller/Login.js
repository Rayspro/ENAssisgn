const UserModel = require("../Model/User.model");
const { jwtGenrate } = require("../Util/webToken.util");
const { compareHash } = require("../Util/GenrateHash");

async function Login(req, res) {
  const { email, password } = req.body;
  if (!!email && !!password) {
    try {
      const user = await UserModel.findOne({ email: email });
      await compareHash(password, user.password);
      if (!!user) {
        const token = await jwtGenrate(user);
        res
          .status(200)
          .send({
            token: token,
            type: user.admin,
            uname: user.uname,
            email: user.email,
            admin: 1,
          });
      } else {
        res.status(200).send({ msg: "User not found" });
      }
    } catch (err) {
      if (!!err.code) {
        res.status(500).send({ msg: err.msg });
      } else {
        res.status(500).send({ msg: "Internal Server Error" });
      }
    }
  }
}

module.exports = Login;
