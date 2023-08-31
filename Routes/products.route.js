const express = require("express");
const ProductController = require("../controller/product.controller");
const validate = require("../middleware/validation.middleware");
const productSchema = require("../schema/product.schema")

const productController = new ProductController();

const router = express.Router();

router.get("/", function (req, res, next) {
  console.log("hello products");
  res.send("get products data");
});

router.get("/:id", function (req, res, next) {
  res.send("get products data");
});

router.post("/", validate(productSchema), productController.saveProduct);

router.put("/:id", productController.updateProruct);

router.patch("/:id", productController.patchProduct);

router.delete("/:id", function (req, res, next) {
  res.send("get products data");
});

module.exports = router;
