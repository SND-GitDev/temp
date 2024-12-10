const express = require("express");
const { listRecipe, createRecipe, updateRecipe } = require("./controllers");
const router = express.Router();

router.get("/", listRecipe);
router.post("/", createRecipe);
router.put("/:recipeId", updateRecipe);

module.exports = router;
