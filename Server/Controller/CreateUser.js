const UserService = require("../Service/User.service");

async function CreateUser(req, res) {
  try {
    const { email, password, fname, lname, uname, hobbie } = req.body;
    console.log(req.body)
    if (!email && !password && !fname && !lname && !uname && !hobbie) {
      res.status(400).send({ msg: "Bad Request2" });
    } else {
      const UService = new UserService();
      const newUser = await UService.CreateUser(req.body);
      res.status(200).send(newUser);
    }
  } catch (err) {
    console.log(err)
    res.status(500).send("Internal Server Error");
  }
}

module.exports = CreateUser;
