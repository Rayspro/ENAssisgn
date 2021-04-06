const User = require("../Model/User.model");

module.exports = (req, res, callback) => {
  const { token } = req.headers;
  User.findOne({ token: token })
    .select({ password: 0, token: 0 })
    .then((user) => {
      if (user) {
        req = Object.assign(req, { user: user });
        callback(true);
      } else {
        callback(false);
      }
    });
};
