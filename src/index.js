function displayWeatherCondition(response) {
  console.log(response);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}%;`;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `wind: ${Math.round(response.data.wind.speed)}km/h`;
}

function searchCity(city) {
  let apiKey = "e330f70bea90351a337b95917ee9d746";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#enter-city").value;
  searchCity(city);
}

function showLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "e330f70bea90351a337b95917ee9d746";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}
let currentLocationIcon = document.querySelector("#location");
currentLocationIcon.addEventListener("click", getCurrentLocation);
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showLocation);
}
searchCity("Enugu");

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let date = now.getDate();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let searchInput = document.querySelector("#enter-city");
let h1 = document.querySelector("#city");
if (searchInput.value) {
  h1.innerHTML = `${searchInput.value}`;
}

let h2 = document.querySelector("#last-updated");
if (searchInput.value) {
  h2.innerHTML = `Last updated: ${day} ${month} ${date} ${hours}: ${minutes}`;
}

let formOne = document.querySelector("#form-city-search");
formOne.addEventListener("submit", handleSubmit);

//function convertToF(event) {
//event.preventDefault();
//let celsiusValue = document.querySelector("#temp");
//celsiusValue.innerHTML = Math.round((27 * 9) / 5 + 32);
//}

//function convertToC(event) {
//event.preventDefault();
//let fahrenheitValue = document.querySelector("#temp");
//fahrenheitValue.innerHTML = Math.round(27 - (32 * 5) / 9);
//}

//let fahrenheitLink = document.querySelector("#fahr-link");
//fahrenheitLink.addEventListener("click", convertToF);
//let celsiusLink = document.querySelector("#celsius-link");
//celsiusLink.addEventListener("click", convertToC);
