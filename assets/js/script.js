var getCityReport = function(city) {
    var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q=San-Antonio&units=imperial&appid=44fd4a683d34b7393e0bfa504d69c463";

    console.log("function was called")
    fetch(cityUrl).then(function(firstResponse) {
        firstResponse.json().then(function(firstData) {
            console.log(firstData);
        })
    })
};





/// other api
var getWeatherReport = function(weather) {
    var weatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=29.4241&lon=-98.4936&exclude=hourly,daily&units=imperial&appid=44fd4a683d34b7393e0bfa504d69c463";

    console.log("second function was called")
    fetch(weatherUrl).then(function(secondResponse) {
        secondResponse.json().then(function(secondData) {
            console.log(secondData);
        })
    })
};
var getForecastReport = function(forecast) {
    var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=San-Antonio,us&units=imperial&appid=44fd4a683d34b7393e0bfa504d69c463";

    console.log("third function was called")
    fetch(forecastUrl).then(function(thirdResponse) {
        thirdResponse.json().then(function(thirdData) {
            console.log(thirdData);
        })
    })
};
/// call to city exmaple
getCityReport();


/// call to weather example
getWeatherReport();



/// call to get forecast example
getForecastReport();