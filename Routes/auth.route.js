const express = require("express");
const UserModel = require("../models/user.model");
const ProductModel = require("../models/product.model")

const router = express.Router();

router.post("/register", async function (req, res) {
  try {
    const User = new UserModel(req.body);
    await User.save();
    res.send("register success");
  } catch (error) {
    console.log(error);
    res.send("register failed");
  }
});


router.post("/products", async function (req, res) {
  try {
    const Product = new ProductModel(req.body);
    await Product.save();
    res.send("Products post success");
  } catch (error) {
    console.log(error);
    res.send("Products post failed");
  }
});

module.exports = router;
