console.log("hi");
let formEl = document.getElementById("weatherForm");
let cardEl = document.getElementById("tempCard");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  let cityInput = document.getElementById("cityInput");
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=6d06c4bfc775d151c3103101d1326b44`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCityWeather(data));
  cityInput.innerHTML = " ";
  cardEl.innerHTML = " ";
});

function displayCityWeather(data) {
  let weather = data;
  console.log(data);
  let maxTemp = weather["main"]["temp_max"];
  console.log(maxTemp);
  let minTemp = weather["main"]["temp_min"];
  console.log(minTemp);
  let highTemp = Math.trunc(((maxTemp - 273.15) * 9) / 5 + 32);
  let lowTemp = Math.trunc(((minTemp - 273.15) * 9) / 5 + 32);
  let humidity = weather["main"]["humidity"];
  let forecastTemp = weather["weather"][0]["main"];
  let forecast = forecastTemp;
  let city = weather["name"];
  let country = weather["sys"]["country"];

  let tempcardHTML = `
  <div class="container text-center mt-3"id = "city">
  <h3><strong>${city}, ${country}</strong></h3>
  </div>
<div class="card mt-3" style="width: 18rem;">
  <div class="card-header" id="highHeader" style="background-color: red";>
  <h5 style="color: white";>High</h5>
  </div>
  <ul class="list-group list-group-flush mt-3">
    <li class="list-group-item">${highTemp}F</li>
  </ul>
</div>
<div class="card mt-3" style="width: 18rem;">
  <div class="card-header" id="lowHeader" style="background-color: blue";>
  <h5 style="color: white";>Low</h5>
  </div>
  <ul class="list-group list-group-flush mt-3">
    <li class="list-group-item">${lowTemp}F</li>
  </ul>
</div>
<div class="card mt-3" style="width: 18rem;">
  <div class="card-header" id=forcastHeader style="background-color: purple";>
    <h5 style="color: white";>Forecast</h5>
  </div>
  <ul class="list-group list-group-flush mt-3">
    <li class="list-group-item">${forecast}</li>
  </ul>
</div>
<div class="card mt-3" style="width: 18rem;">
  <div class="card-header" id="humidityHeader" style="background-color: green";>
  <h5 style="color: white";>Humidity</h5>
  </div>
  <ul class="list-group list-group-flush mt-3">
    <li class="list-group-item">${humidity}%</li>
  </ul>
</div>
`;
  cardEl.innerHTML += tempcardHTML;
}
