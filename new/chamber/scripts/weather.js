// Function to fetch weather data from the API
function fetchWeatherData() {
  const apiKey = 'ba56ade51dfd64213fbd29c60ff9a0ff';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Accra&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          // Extract the required weather information
          const temperature = data.main.temp;
          const iconCode = data.weather[0].icon;

          // Update the HTML elements with the retrieved information
          document.getElementById('current-temp').textContent = temperature + "°C";
          document.getElementById('weather-icon').setAttribute('src', `http://openweathermap.org/img/wn/${iconCode}.png`);
          document.getElementById('weather-icon').setAttribute('alt', data.weather[0].description);
      })
      .catch(error => console.log('Error fetching weather data:', error));
}

// Call the function to fetch weather data when the page loads
window.addEventListener('load', fetchWeatherData);
