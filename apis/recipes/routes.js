const express = require("express");
const { listRecipe, createRecipe } = require("./controllers");
const router = express.Router();

router.get("/", listRecipe);
router.post("/", createRecipe);

module.exports = router;
