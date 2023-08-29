const express = require("express");
const UserModel = require("../models/user.model");

const router = express.Router();

router.get("/", async function (req, res) {
  try {
    const data = await UserModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send("register failed");
  }
});

router.get("/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const data = await UserModel.findById(id);
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send("register failed");
  }
});

module.exports = router;
