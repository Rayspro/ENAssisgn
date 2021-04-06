const express = require("express");
const router = express.Router();
const AllUser = require("../Controller/AllUser");
const UpdateUser = require("../Controller/UpdateUser");
const DeleteOneUser = require("../Controller/DeleteUser");
const CreateUser = require("../Controller/CreateUser");

router.get("/getAllUser", AllUser);

router.post("/update", UpdateUser);

router.post("/create", CreateUser);

router.get("/delete/:id", DeleteOneUser);

module.exports = router;