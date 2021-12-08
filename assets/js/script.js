var getWeatherReport = function(city) {
    var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=44fd4a683d34b7393e0bfa504d69c463";

    
    console.log("function was called")
    fetch(weatherUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        })
    })
};

getWeatherReport("London");