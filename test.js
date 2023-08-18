// main.js

import fetchWeatherData from '../apis/fetchWeatherData.js';
import daysOfWeek from './data.js';

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

const displayWeatherForecast = (container, forecast) => {
    container.innerHTML = '<h2>Weather Forecast for the Week</h2>';

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    for (let hour = 0; hour < 168; hour += 24) {
        const dayOfWeek = daysOfWeek[(new Date().getDay() + Math.floor(hour / 24)) % 7];
        const dayBlock = createDayBlock(dayOfWeek, forecast, hour);

        container.appendChild(dayBlock);
    }
};

const createDayBlock = (dayOfWeek, forecast, startHour) => {
    const dayBlock = document.createElement('div');
    dayBlock.innerHTML = `<h3>${dayOfWeek}</h3>`;

    const dayButton = createButton('Show Weather');
    dayBlock.appendChild(dayButton);

    const weatherData = createWeatherData(forecast, startHour);
    dayBlock.appendChild(weatherData);

    dayButton.addEventListener('click', () => toggleWeatherData(weatherData));

    return dayBlock;
};

const createButton = text => {
    const button = document.createElement('button');
    button.innerHTML = text;
    return button;
};

const createWeatherData = (forecast, startHour) => {
    const weatherData = document.createElement('div');
    weatherData.className = 'weather-data';
    weatherData.style.display = 'none';

    for (let i = startHour; i < startHour + 24; i++) {
        const temp = forecast[i];
        const time = (i % 24) + ':00';
        const weatherItem = createWeatherItem(`${time} - ${temp}°C`);
        weatherData.appendChild(weatherItem);
    }

    return weatherData;
};

const createWeatherItem = text => {
    const weatherItem = document.createElement('p');
    weatherItem.textContent = text;
    return weatherItem;
};

const toggleWeatherData = weatherData => {
    if (weatherData.style.display === 'none') {
        weatherData.style.display = 'block';
    } else {
        weatherData.style.display = 'none';
    }
};
