const jwt = require("jsonwebtoken");

const jwtGenrate = (user) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      JSON.stringify(user),
      process.env.JWT_SECRET,
      function (err, token) {
        if (!!err) {
          reject({ msg: "Something Went Wrong", code: 404 });
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = { jwtGenrate };
