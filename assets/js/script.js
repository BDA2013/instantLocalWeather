// Example code to update the current day forecast
document.getElementById("currentTemperature").innerText = "25°C";
document.getElementById("currentCondition").innerText = "Sunny";
document.getElementById("currentIcon");

// Example code to update the 5-day forecast
document.getElementById("day1Temperature").innerText = "23°C";
document.getElementById("day1Condition").innerText = "Partly Cloudy";
document.getElementById("day1Icon");

document.getElementById("day2Temperature").innerText = "21°C";
document.getElementById("day2Condition").innerText = "Rainy";
document.getElementById("day2Icon");

document.getElementById("day3Temperature").innerText = "22°C";
document.getElementById("day3Condition").innerText = "Cloudy";
document.getElementById("day3Icon"); // Example icon

document.getElementById("day4Temperature").innerText = "24°C";
document.getElementById("day4Condition").innerText = "Sunny";
document.getElementById("day4Icon") // Example icon

document.getElementById("day5Temperature").innerText = "26°C";
document.getElementById("day5Condition").innerText = "Mostly Sunny";
document.getElementById("day5Icon");

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
  var locationInput = "Englewood, New Jersey";
  console.log(locationInput);
  var inputArray = locationInput.split(',');
  var fixedStateArray = inputArray[1].trimStart();
  inputArray[1] = fixedStateArray; 

  console.log(inputArray);
  gatherLatLon(inputArray);
}

gatherLocationInput();

