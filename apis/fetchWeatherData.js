// api.js

const fetchWeatherData = async () => {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=50.8503&longitude=4.3517&hourly=temperature_2m';
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Failed to fetch weather data with status: ${res.status}`);
        }

        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};

export default fetchWeatherData;
