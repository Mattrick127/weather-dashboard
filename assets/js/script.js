"use strict";

const btnContainer = document.querySelector(".btn-container");
const btnWeather = document.querySelector(".btn-weather");
let input;
let temp;
let windSpeed;
let humidity;

const getCity = function (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=44fd4a683d34b7393e0bfa504d69c463`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const temp = data.main.temp;
        console.log(`The current temperature in ${city}, is ${temp}`);
        const windSpeed = data.wind.speed;
        console.log(`The current wind speed in ${city}, is ${windSpeed}`);
        const humidity = data.main.humidity;
        console.log(`The current humidity in ${city}, is ${humidity}`);
    });
};
// var getWeatherReport = function(weather) {
//     var weatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=29.4241&lon=-98.4936&exclude=hourly&units=imperial&appid=44fd4a683d34b7393e0bfa504d69c463";

//     console.log("second function was called")
//     fetch(weatherUrl).then(function(secondResponse) {
//         secondResponse.json().then(function(secondData) {
//             console.log(secondData);
//         })
//     })
// };
const getClick = function (e) {
    e.preventDefault();
    const click = e.target.id;
    console.log(click);
    getCity(click);
};
btnContainer.addEventListener("click", getClick);


const clearString = function () {
    document.getElementById("city").value = "";
};

const cityString = function (e) {
    e.preventDefault();
    input = document.getElementById("city").value
    console.log(input);
    getCity(input);
    clearString();
};

const enterKeyPressed = function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        cityString();
        console.log("enter hit");
    }
};

// btnWeather.addEventListener

/// call to city exmaple
getCity('Austin');

// /// call to weather example
// getWeatherReport();