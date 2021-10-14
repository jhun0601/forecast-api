const express = require("express");
const bodyParser = require("body-parser");
const forecastRouter = require("./routes/forecast-routes");

const app = express();

app.use(bodyParser.json());

app.use("/api/weather", forecastRouter);
app.use("/api/weather", forecastRouter);

app.listen(5001);
