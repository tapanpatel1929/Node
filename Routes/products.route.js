const express = require("express");
const router = express.Router();
const ProductModel = require("../models/product.model")


router.get("/", async function (req, res) {
  try {
    const data = await ProductModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send("Product get failed");
  }
});

router.get("/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const data = await ProductModel.findById(id);
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send("Product Get Failed");
  }
});

router.put("/:id", async function (req, res) {
  try {
    const { id } = req.params;
    let data = await ProductModel.findByIdAndUpdate(id);
    res.send("updated successfully");
  } catch (error) {
    console.log(error);
    res.send("Product put Failed");
  }
});


router.delete("/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const data = await ProductModel.findByIdAndDelete(id);
    res.send("data deleted ");
  } catch (error) {
    console.log(error);
    res.send("Product Delete Failed");
  }
});

router.patch("/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const data = await ProductModel.findByIdAndUpdate(id);
    res.send("patch done");
  } catch (error) {
    console.log(error);
    res.send("Product patch Failed");
  }
});



module.exports = router;
