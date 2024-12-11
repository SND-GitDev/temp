const express = require("express");
const router = express.Router();

const { registerUser, logoutUser } = require("./controllers");
router.post("/register", registerUser);
router.post("/logout", logoutUser);
// router.post("/login", loginUser);

module.exports = router;
