const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&units=metric&appid=d2726fe3e4e91d3e21bc3b6132864ef5`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.cod === "400") {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `It is currently ${body.current.temp} degress out. There is a ${body.current.wind_speed}km/h wind speed and the humidity is ${body.current.humidity}%.`
      );
    }
  });
};

module.exports = forecast;
