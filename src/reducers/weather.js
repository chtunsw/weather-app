const weather = (state = {}, action) => {
    switch (action.type) {
        case "CHANGE_WEATHER_LOCATION":
        return {
            ...state,
            weatherLocation: action.weatherLocation
        }
        case "CHANGE_WEATHER_DATA":
        return {
            ...state,
            weatherData: action.weatherData
        }
        default:
        return state;
    }
};
export default weather;