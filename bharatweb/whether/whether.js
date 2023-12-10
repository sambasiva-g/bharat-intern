function getWeather() {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const cityInput = document.getElementById('city');
    const cityName = cityInput.value;
  
    if (cityName === '') {
      alert('Please enter a city name.');
      return;
    }
  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
  
        if (data.cod === '404') {
          weatherInfo.innerHTML = `<p>${data.message}</p>`;
        } else {
          const temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius
          const description = data.weather[0].description;
          const city = data.name;
  
          weatherInfo.innerHTML = `<p>Current weather in ${city}: ${temperature}°C, ${description}</p>`;
        }
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }
  