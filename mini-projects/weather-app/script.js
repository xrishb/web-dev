async function getWeather() {
    const apiKey = '7f9bf2a2aa2d3986507ddeff14681204';
    const city = document.getElementById('area').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const weatherData = await response.json();
        const weatherInfo = `
            <p>Temperature: ${weatherData.main.temp}°C</p>
            <p>Description: ${weatherData.weather[0].description}</p>
            <p>Humidity: ${weatherData.main.humidity}%</p>
            <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
        `;
        document.getElementById('weatherInfo').innerHTML = weatherInfo;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weatherInfo').innerHTML = 'Error fetching weather data';
    }
}
