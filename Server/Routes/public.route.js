const express = require("express");
const router = express.Router();
const Login = require("../Controller/Login");

router.get("/", (req, res) => {
  res.status(200).send({ msg: "Server is on" });
});

router.post("/Login", Login);

module.exports = router;
