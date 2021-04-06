const UserService = require("../Service/User.service");

async function getAllUser(req, res) {
  const {page} = req.query;

  try {
    const UService = new UserService();
    const users = await UService.findAllUser(page);
    res.status(200).send(users);
  } catch (err) {
     res.status(500).send("Internal Server Error") 
  }
}

module.exports = getAllUser;
