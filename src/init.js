// main.js

import fetchWeatherData from '../apis/fetchWeatherData.js';
import displayWeatherForecast from './components/displayWeatherForecast.js';

document.addEventListener('DOMContentLoaded', async () => {
    const getWeatherButton = document.getElementById('getWeatherButton');
    const weatherInfo = document.getElementById('weatherInfo');

    getWeatherButton.addEventListener('click', async () => {
        try {
            const data = await fetchWeatherData();
            const forecast = data['hourly']['temperature_2m'];

            if (data) {
                displayWeatherForecast(weatherInfo, forecast);
            } else {
                weatherInfo.innerHTML = 'Error fetching weather data';
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = 'Error fetching weather data';
        }
    });
});

