type WeatherInfo = {
    temp: number;
    city: string;
    icon: string;
}


const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

const getWeatherInfo = async ({latitude, longitude}: { latitude: string, longitude: string }) => {
    let response = await fetch(
        `${baseUrl}?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${process.env.WEATHER_API_KEY}`
    );
    let data = await response.json();
    return data;
}


export {getWeatherInfo};