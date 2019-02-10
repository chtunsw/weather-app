export const changeWeatherLocation = ({ weatherLocation }) => ({
    type: "CHANGE_WEATHER_LOCATION", 
    weatherLocation
});

export const changeWeatherData = ({ weatherData }) => ({
    type: "CHANGE_WEATHER_DATA", 
    weatherData
});