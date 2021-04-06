const UserService = require("../Service/User.service");

async function UpdateUser(req, res) {
  try {
    const UService = new UserService();
    const users = await UService.findOneAndModifyUser({ _id: req.body.id }, req.body);
    res.status(200).send(users);
  } catch (err) {
    console.log(err)
    res.status(500).send("Internal Server Error");
  }
}

module.exports = UpdateUser;
