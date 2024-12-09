const express = require("express");
const { listCategories, createCategory } = require("./controllers");
const router = express.Router();

router.get("/", listCategories);
router.post("/", createCategory);

module.exports = router;
