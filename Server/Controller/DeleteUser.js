const UserService = require("../Service/User.service");

async function DeleteUser(req, res) {
  try {
    console.log(req.body)
    const UService = new UserService();
    const users = await UService.DeleteOneUser({ _id: req.params.id });
    console.log(users)
    res.status(200).send({id:users._id});
  } catch (err) {
    console.log(err)
    res.status(500).send("Internal Server Error2");
  }
}

module.exports = DeleteUser;
