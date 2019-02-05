import React from 'react'
import { getWeatherData } from '../static/getWeatherData'

class WeatherDetailBlock extends React.Component {
    constructor(props) {
        super()
        this.state = {
            weatherData: null
        }
    }

    async componentDidMount() {
        const receivedData = await getWeatherData(this.props.location)
        this.setState({weatherData: receivedData})
    }

    getDetails = () => {
        return(
                <span>
                    {'temp: ' + this.state.weatherData.current.temp_c } &deg;C <br />
                    {'humidity: ' + this.state.weatherData.current.humidity } <br />
                    {'cloud: ' + this.state.weatherData.current.cloud } <br />
                    {'wind: ' + this.state.weatherData.current.wind_degree } 
                </span>
        )
    }

    render() {
        return(
            <div>
                {this.state.weatherData && this.getDetails()}
            </div>
        )
    }
}

export default WeatherDetailBlock;