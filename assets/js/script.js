const btnContainer = document.querySelector(".btn-container");
const btnWeather = document.querySelector(".btn-weather");
let input;
let temp;
let windSpeed;
let humidity;
let currentCity;
let longitude;
let latitude;

const getForecast = function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&exclude=hourly&appid=44fd4a683d34b7393e0bfa504d69c463`
    )
    .then((response) => response.json())
    .then((data) => console.log(data));
};


const getCity = function (city) {
  fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}
  &units=imperial&appid=4498796788a55331a395a36bd3b20cbb`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      currentCity = data.name;
      console.log(`The current city is ${currentCity}`);
      temp = data.main.temp;
      console.log(`The current temperature in ${city}, is ${temp}`);
      windSpeed = data.wind.speed;
      console.log(`The current wind speed in ${city}, is ${windSpeed}`);
      humidity = data.main.humidity;
      console.log(`The current humidity in ${city}, is ${humidity}`);
      longitude = data.coord.lon;
      latitude = data.coord.lat;
        })
    .then(() => getForecast(currentCity))
    .then(() => populateFields());
};


// var getWeatherReport = function(weather) {
//     var weatherUrl = "https://api.openweathermap.org/data/2.5/onecall?" + latitude + "&" + longitude + "&exclude=hourly&units=imperial&appid=";

//     console.log("second function was called")
//     fetch(weatherUrl).then(function(secondResponse) {
//         secondResponse.json().then(function(secondData) {
//             console.log(secondData);
//         })
//     })
// };
//gets id name from btns and runs get city


const getClick = function (e) {
  e.preventDefault();
  const click = e.target.id;
  console.log(click);
  getCity(click);
};
btnContainer.addEventListener("click", getClick);

//clears string in input
const clearString = function () {
  document.getElementById("city").value = "";
};

//Capturing the string
const cityString = function (e) {
  e.preventDefault();
  input = document.getElementById("city").value;
  console.log(input);
  getCity(input);
  clearString();
};

//Run city string on enter basesd on input
const enterKeyPressed = function (e) {
  if (e.keyCode == 13) {
    e.preventDefault();
    cityString();
    console.log("enter hit");
  }
};




const populateFields = function () {
  document.getElementById("temp").innerHTML = temp;
  document.getElementById("wind").innerHTML = windSpeed;
  document.getElementById("humidity").innerHTML = humidity;
  document.getElementById("currentCity").innerHTML = currentCity;
  document.getElementById("longitude").innerHTML = longitude;
  document.getElementById("latitude").innerHTML = latitude;
};


// getWeatherReport();





btnWeather.addEventListener("click", cityString);