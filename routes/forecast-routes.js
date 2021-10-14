const express = require("express");

const forecastController = require("../controllers/forecast-contoller");

const router = express.Router();

router.get("/", forecastController.getForecast);
router.get("/request", forecastController.getForecastRequest);

module.exports = router;
