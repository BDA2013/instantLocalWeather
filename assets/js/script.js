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

