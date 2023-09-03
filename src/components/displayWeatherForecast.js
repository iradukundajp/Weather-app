import daysOfWeek from '../data.js';

const displayWeatherForecast = (container, forecast) => {
  container.innerHTML = '<h2>Weather Forecast for the Week</h2>';

  const createDayBlock = (dayOfWeek, forecast, startHour) => {
    const dayBlock = document.createElement('div');

    const header = document.createElement('h3');
    header.textContent = dayOfWeek;

    const button = document.createElement('button');
    button.textContent = 'Show Weather';
    button.className = 'show-weather-button';

    const weatherData = document.createElement('div');
    weatherData.className = 'weather-data';
    weatherData.style.display = 'none';

    for (let i = startHour; i < startHour + 24; i++) {
      const temp = forecast[i];
      const time = (i % 24) + ':00';

      const weatherItem = document.createElement('p');
      weatherItem.textContent = `${time} -> ${temp}°C`;

      weatherData.appendChild(weatherItem);
    }

    button.addEventListener('click', () => {
      if (weatherData.style.display === 'none') {
        weatherData.style.display = 'block';
        button.textContent = 'Hide Weather';
      } else {
        weatherData.style.display = 'none';
        button.textContent = 'Show Weather';
      }
    });

    dayBlock.appendChild(header);
    dayBlock.appendChild(button);
    dayBlock.appendChild(weatherData);

    return dayBlock;
  };

  for (let hour = 0; hour < 168; hour += 24) {
    const dayOfWeek = daysOfWeek[(new Date().getDay() + Math.floor(hour / 24)) % 7];
    const dayBlock = createDayBlock(dayOfWeek, forecast, hour);
    container.appendChild(dayBlock);
  }
};

export default displayWeatherForecast;
