import fetchWeatherData from '../../apis/fetchWeatherData.js';
import displayWeatherForecast from '../components/displayWeatherForecast.js';
import dom from '../dom.js';
const loadHandler = async () => {
    dom.getWeatherButton.addEventListener('click', async () => {
      try {
        const data = await fetchWeatherData();
        const forecast = data['hourly']['temperature_2m'];
  
        if (data) {
          displayWeatherForecast(dom.weatherInfo, forecast);
        } else {
          dom.weatherInfo.innerHTML = 'Error fetching weather data';
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
        dom.weatherInfo.innerHTML = 'Error fetching weather data';
      }
    });
  };
  
  export default loadHandler;