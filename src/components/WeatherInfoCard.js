import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import './WeatherInfoCard.css'

class WeatherInfoCard extends React.Component {

    contentSelector = () => {
        if (this.props.weatherData) {
            return (
                <div className='infoCard_block'>
                    <span className='infoCard_date'>
                        {this.props.weatherData.date}
                    </span>
                    <img alt='not found' className='infoCard_icon' src={this.props.weatherData.day.condition.icon} />
                    <span className='infoCard_temp'>
                        {this.props.weatherData.day.avgtemp_c} &deg;C
                    </span>
                    <span className='infoCard_type'>
                        {this.props.weatherData.day.condition.text}
                    </span>
                </div>
            )
        }
        //if this.props.weatherData is null, return spinner
        else {
            return (
                <div className='infoCard_block'>
                    <CircularProgress />
                </div>
            )
        }
    }

    render() {
        return this.contentSelector()
    }
}

export default WeatherInfoCard;