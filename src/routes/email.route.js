const express = require("express");
const router = express.Router();
const emailController = require("../controllers/email.controller");

router.get("/history", emailController.getHistory);

module.exports = router;
