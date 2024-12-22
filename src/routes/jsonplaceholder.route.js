const express = require("express");
const router = express.Router();
const jsonplaceholderController = require("../controllers/jsonplaceholder.controller");

router.get("/", jsonplaceholderController.getPosts);

module.exports = router;
