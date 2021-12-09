var getCityReport = function(city) {
    var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=44fd4a683d34b7393e0bfa504d69c463";

    console.log("function was called")
    fetch(cityUrl).then(function(firstResponse) {
        firstResponse.json().then(function(firstData) {
            console.log(firstData);
        })
    })
};
/// call to city exmaple
getCityReport("San Antonio");




/// other api
var getWeatherReport = function(weather) {
    var weatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=44fd4a683d34b7393e0bfa504d69c463";

    console.log("second function was called")
    fetch(weatherUrl).then(function(secondResponse) {
        secondResponse.json().then(function(secondData) {
            console.log(secondData);
        })
    })
};
/// call to weather example
getWeatherReport();




var getForecastReport = function(forecast) {
    var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=44fd4a683d34b7393e0bfa504d69c463";

    console.log("third function was called")
    fetch(forecastUrl).then(function(thirdResponse) {
        thirdResponse.json().then(function(thirdData) {
            console.log(thirdData);
        })
    })
};
/// call to get forecast example
getForecastReport();