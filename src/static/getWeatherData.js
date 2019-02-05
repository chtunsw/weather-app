import axios from 'axios'

async function getWeatherData (location) {
    const weatherResponse = await axios.get(`http://api.apixu.com/v1/current.json?key=a027b8abca1f45809a594902192301&q=${location}`)
    console.log(weatherResponse.data)
    return weatherResponse.data
}

export { getWeatherData };