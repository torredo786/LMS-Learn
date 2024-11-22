const { getCardData } = require("../controllers/Card.controller");
const express = require("express");
const router = express.Router();

router.get("/getCardData", getCardData);

module.exports = router;
