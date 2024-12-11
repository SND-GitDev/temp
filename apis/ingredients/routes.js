const express = require("express");
const { listIngredient, createIngredient } = require("./controllers");

const router = express.Router();

router.get("/", listIngredient);
router.post("/", createIngredient);

module.exports = router;
