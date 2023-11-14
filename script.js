const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7e9a4adfb1mshca300d259614711p1454cdjsn8731e55182ac',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const cityName = document.getElementById('cityName'); // Define the cityName element
const Submit = document.getElementById('Submit'); // Define the Submit button element

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Update HTML elements with weather data
      document.getElementById('temp').innerHTML = data.temp;
      document.getElementById('temp2').innerHTML = data.temp;
      document.getElementById('feels_like').innerHTML = data.feels_like;
      document.getElementById('humidity').innerHTML = data.humidity;
      document.getElementById('humidity2').innerHTML = data.humidity;
      document.getElementById('min_temp').innerHTML = data.min_temp;
      document.getElementById('max_temp').innerHTML = data.max_temp;
      document.getElementById('wind_speed').innerHTML = data.wind_speed;
      document.getElementById('wind_speed2').innerHTML = data.wind_speed;
      document.getElementById('wind_degrees').innerHTML = data.wind_degrees;
      document.getElementById('sunrise').innerHTML = data.sunrise;
      document.getElementById('sunset').innerHTML = data.sunset;
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const cityInput = document.getElementById('city').value;
  getWeather(cityInput);
});

// Initially load weather for Delhi
getWeather("Delhi");



// New Code










