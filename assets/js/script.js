var getWeatherReport = function() {
    console.log("function was called");
    fetch ("https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=44fd4a683d34b7393e0bfa504d69c463");
};

getWeatherReport();