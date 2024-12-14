const express = require("express");
const passport = require("passport");
const {
  listCategories,
  createCategory,
  updateCategory,
  addRecipe,
} = require("./controllers");
const router = express.Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  listCategories
);
router.post("/", createCategory);
router.put("/:categoryId", updateCategory);
router.post("/:categoryId/add/:recipeId", addRecipe);

module.exports = router;
