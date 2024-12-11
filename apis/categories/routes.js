const express = require("express");
const {
  listCategories,
  createCategory,
  updateCategory,
  addRecipe,
} = require("./controllers");
const router = express.Router();

router.get("/", listCategories);
router.post("/", createCategory);
router.put("/:categoryId", updateCategory);
router.post("/:categoryId/add/:recipeId", addRecipe);

module.exports = router;
