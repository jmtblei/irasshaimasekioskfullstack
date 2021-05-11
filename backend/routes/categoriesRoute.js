const express = require("express");
const router = express.Router();
const data = require ("../data/data");

//@desc get all categories
//@route get /api/categories
//@access public
router.get("/", (req, res) => res.json(data.categories));

module.exports = router;