const mongoose = require("mongoose");

const MongoConnect = () => {
  mongoose.connect(process.env.MongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }).catch(err=>{
      console.log(err)
  });
};

module.exports = { MongoConnect };
