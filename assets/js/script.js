//Value
var locationInput = document.getElementById("locationInput");
var weatherButton = document.getElementById("getWeather");

// Example code to update the current day forecast
var currentIcon = document.getElementById("currentIcon");
var currentTemp = document.getElementById("currentTemperature").innerText = "25°C";
var currentCond = document.getElementById("currentCondition").innerText = "Sunny";
var currentWind = document.getElementById("currentWindSpeed");
var currentHumi = document.getElementById("currentHumidity");

// Example code to update the 5-day forecast
var day1Icon = document.getElementById("day1Icon");
var day1Temp = document.getElementById("day1Temperature").innerText = "23°C";
var day1Cond = document.getElementById("day1Condition").innerText = "Partly Cloudy";
var day1Wind = document.getElementById("day1WindSpeed");
var day1Humi = document.getElementById("day1Humidity");

var day2Icon = document.getElementById("day2Icon");
var day2Temp = document.getElementById("day2Temperature").innerText = "21°C";
var day2Cond = document.getElementById("day2Condition").innerText = "Rainy";
var day2Wind = document.getElementById("day2WindSpeed");
var day2Humi = document.getElementById("day2Humidity");

var day3Icon = document.getElementById("day3Icon");
var day3Temp = document.getElementById("day3Temperature").innerText = "22°C";
var day3Cond = document.getElementById("day3Condition").innerText = "Cloudy";
var day3Wind = document.getElementById("day3WindSpeed");
var day3Humi = document.getElementById("day3Humidity");

var day4Icon = document.getElementById("day4Icon");
var day4Temp = document.getElementById("day4Temperature").innerText = "24°C";
var day4Cond = document.getElementById("day4Condition").innerText = "Sunny";
var day4Wind = document.getElementById("day4WindSpeed");
var day4Humi = document.getElementById("day4Humidity");

var day5Icon = document.getElementById("day5Icon");
var day5Temp = document.getElementById("day5Temperature").innerText = "26°C";
var day5Cond = document.getElementById("day5Condition").innerText = "Mostly Sunny";
var day5Wind = document.getElementById("day5WindSpeed");
var day5Humi = document.getElementById("day5Humidity");

function gatherWeather(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=89d3bde90b46aeb52fc0fca5cffee20e`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
};

function gatherLatLon(city, state) {
  fetch(`https://api.geoapify.com/v1/geocode/search?city=${city}&state=${state}&format=json&apiKey=ff79fe741988451695b4d420a554505d`)
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
      //console.log(data);
      locationLon = data.results[0].lon;
      locationLat = data.results[0].lat;
      console.log(locationLat, locationLon);
      gatherWeather(locationLat, locationLon);   
  });
};

function gatherLocationInput(){
  var location = locationInput.value;
  console.log(location);

  var inputArray = location.split(',');

  // NJ
  var fixedStateArray = inputArray[1].trimStart();
  inputArray[1] = fixedStateArray; 

  console.log(inputArray);
  gatherLatLon(inputArray);
}

weatherButton.addEventListener('click', function() {
  gatherLocationInput();
});

locationInput.addEventListener('keypress', function(e) {
  if(e.key === 'Enter') {
    gatherLocationInput();
  }
})


