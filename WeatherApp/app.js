
const cityChoiceForm = document.getElementById('cityChoiceForm')
const weatherInfoDiv = document.getElementById('weatherInfoDiv')
const cityChoiceBox = document.getElementById('cityChoiceBox')


cityChoiceForm.addEventListener("submit", function (event) {
  event.preventDefault();
  getWeather(displayWeather);
})

function getWeather(weatherFetched) {
    let city = cityChoiceBox.value
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=4f2528152bfe1cebb9db6c4562fc1808&units=imperial')
        .then((response) => {
            return response.json()
        }).then((result) => {
            weatherFetched(result)
        }).catch(() => {
            weatherDisplayDiv.innerHTML = `<h3>Choose a different City ${city}.</h3>`
        })
}

function displayWeather(weatherDisplayed) {
    weatherDisplayDiv.innerHTML = `<h3>${weatherDisplayed.name}</h3>
    <p>Temperature: ${parseInt(weatherDisplayed.main.temp)}°</p>
    <p>High: ${parseInt(weatherDisplayed.main.temp_max)}°</p>
    <p>Low: ${parseInt(weatherDisplayed.main.temp_min)}°</p>
    <p>Humidity: ${weatherDisplayed.main.humidity}</p>`
}






