const btnContainer = document.querySelector(".btn-container");
const btnWeather = document.querySelector(".btn-weather");
const forecastContainer = document.querySelector('.forecast');
const clearBtn = document.querySelector('.clear');
const myInput = document.getElementById('my-input')
const myOtherButton = document.getElementById('my-other-button')


let input;
let temp;
let windSpeed;
let humidity;
let currentCity;
let longitude;
let latitude;
let uvIndex;
let oldContainer;

//used to dynamically set days
const weekday = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];


const populateFields = function () {
  document.getElementById("temp").innerHTML = temp;
  document.getElementById("wind").innerHTML = windSpeed;
  document.getElementById("humidity").innerHTML = humidity;
  document.getElementById("currentCity").innerHTML = currentCity;
  document.getElementById("longitude").innerHTML = longitude;
  document.getElementById("latitude").innerHTML = latitude;
  document.getElementById("uvIndex").innerHTML = uvIndex;
};

const clearFields = function () {
  document.getElementById('currentCity').innerHTML = '';
  document.getElementById('temp').innerHTML = 0;
  document.getElementById('wind').innerHTML = 0;
  document.getElementById('humidity').innerHTML = 0;
  document.getElementById('uvIndex').innerHTML = 0;
  document.getElementById("longitude").innerHTML = 0;
  document.getElementById("latitude").innerHTML = 0;
};

// data.current.uvi

const getWeather = function (lat, lng) {

    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=hourly&units=imperial&appid=44fd4a683d34b7393e0bfa504d69c463`
    )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      temp = data.current.temp;
      windSpeed = data.current.wind_speed;
      humidity = data.current.humidity;
      longitude = data.lon;
      latitude = data.lat;
      uvIndex = data.current.uvi;
      document.querySelector("#uvIndex").className = "";
      if (uvIndex < 3) {
        document.querySelector("#uvIndex").classList.add("favorable")
      } else if (uvIndex < 6) {
        document.querySelector("#uvIndex").classList.add("moderate")
      } else {
        document.querySelector("#uvIndex").classList.add("severe");
      }

      const dailyArr = data.daily;
      console.log(dailyArr);
    getForecast(dailyArr);
    populateFields();
    });
};


const getForecast = function (arr) {

  //only want the 5 day forecast
  arr.splice(5, 3);

  //uses new array
  arr.map(el => {

    //getting current day
    const dt = el.dt;
    const currentDay = new Date(dt * 1000);
    const day = weekday[currentDay.getDay()];

    //creating dynamic html template
    const html = `
    
    <div class="weather-forecast" id="${'old'}">
    <div class="weather-forecast-item">
    <div class="city-state">${currentCity}</div>
    
    <div class="day">${day}</div>
    <div class="img-container">
    <img src="http://openweathermap.org/img/wn/${
      el.weather[0].icon
    }@2x.png" alt="weather icon" class="w-icon" />
    </div>
    <div class="temp">Night: ${el.temp.night}</div>
    <div class="temp">Day: ${el.temp.day}</div>
    <div class="wind">Wind Speed: ${el.wind_speed} mph</div>
    <div class="humidity">Humidity: ${el.humidity}</div>
    <div class="uv">UV Index: ${el.uvi}</div>
    </div>
    `;

    //appending to DOM
    forecastContainer.insertAdjacentHTML('beforeend', html);
    oldContainer = document.querySelectorAll('#old');
    console.log(oldContainer);
  });
};


const clearContainer = function () {
  clearFields();
  oldContainer.forEach(el => {
    el.remove();
  });
};
clearBtn.addEventListener('click', clearContainer);


const getCity = function (city) {
  fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}
  &units=imperial&appid=4498796788a55331a395a36bd3b20cbb`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      currentCity = data.name;
      lng = data.coord.lon;
      lat = data.coord.lat;
        })
    .then(() => getWeather(lat, lng))
    .then(() => populateFields());
};


//gets id name from btns and runs get city
const getClick = function (e) {
  e.preventDefault();
  const click = document.getElementById("city").value;
  console.log(click)
  getCity(click);
  
  const myInputValue = e.target.value;
  
  myOtherButton.style.display = 'block'
  
  myOtherButton.innerHTML = myInputValue
};
btnContainer.addEventListener("click", getClick);
btnWeather.addEventListener("click", getClick);

//clears string in input
const clearString = function () {
  document.getElementById("city").value = "";
};

//Capturing the string
const cityString = function (e) {
  e.preventDefault();
  input = document.getElementById("city").value;
  console.log(input);
  clearContainer();
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
