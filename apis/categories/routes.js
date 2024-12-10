const express = require("express");
const {
  listCategories,
  createCategory,
  updateCategory,
} = require("./controllers");
const router = express.Router();

router.get("/", listCategories);
router.post("/", createCategory);
router.put("/:categoryId", updateCategory);

module.exports = router;
