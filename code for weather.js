document.addEventListener("DOMContentLoaded", () => {
  const apiKey = 'cf6b4bfcc1f3e307705dfecdd8026828'; // Replace with your API key
  const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid={API key}`; // Replace YOUR_CITY with your city name

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const weatherDiv = document.getElementById('weather');
      const weatherData = `
        <p>Location: ${data.name}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
      weatherDiv.innerHTML = weatherData;
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
});
