import React from 'react'
import './WeatherInfoCard.css'

class WeatherInfoCard extends React.Component {
    render() {
        return(
            <div className='infoCard_block'>
                <span className='infoCard_date'>
                    { this.props.weatherData.date }
                </span>
                <img alt='not found' className='infoCard_icon' src={this.props.weatherData.day.condition.icon} /> 
                <span className='infoCard_temp'>
                    { this.props.weatherData.day.avgtemp_c } &deg;C
                </span>
                <span className='infoCard_type'>
                    { this.props.weatherData.day.condition.text }
                </span>
            </div>
        )
    }
}

export default WeatherInfoCard;