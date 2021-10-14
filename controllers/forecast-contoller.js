const https = require("https");
const request = require("request");
_EXTERNAL_URL =
  "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en";

const getForecast = (req, res, next) => {
  https
    .get(_EXTERNAL_URL, (resp) => {
      let data = "";
      resp.on("data", (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on("end", () => {
        let data_parse = JSON.parse(data);
        return res.json(data_parse.weatherForecast);
        // return JSON.stringify(data);
      });
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
};

const getForecastRequest = (req, res, next) => {
  request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
    if (err) {
      return err;
    }
    console.log(body.weatherForecast);
    // const info = JSON.parse(body);
    // return body;
  });
};

exports.getForecast = getForecast;
exports.getForecastRequest = getForecastRequest;
