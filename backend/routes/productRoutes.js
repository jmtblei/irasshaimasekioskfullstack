const express = require("express");
const router = express.Router();

const {
    getAllProducts,
} = require ("../controller/productController");

//@desc get all products
//@route get /api/products
//@access public
router.get("/", getAllProducts);

module.exports = router;