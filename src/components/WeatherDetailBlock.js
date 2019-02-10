import React from 'react'
import { getWeatherData } from '../static/getWeatherData'
import './WeatherDetailBlock.css'

class WeatherDetailBlock extends React.Component {
    render() {
        return(
            <span className='infoBlock'>
                {'temp: ' + this.props.weatherData.current.temp_c } &deg;C <br />
                {'humidity: ' + this.props.weatherData.current.humidity } <br />
                {'cloud: ' + this.props.weatherData.current.cloud } <br />
                {'wind: ' + this.props.weatherData.current.wind_degree } 
            </span>
        )
    }
}

export default WeatherDetailBlock;