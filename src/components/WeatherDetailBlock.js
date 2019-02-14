import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import './WeatherDetailBlock.css'

class WeatherDetailBlock extends React.Component {
    contentSelector = () => {
        if (this.props.weatherData) {
            return (
                <div className='detailBlock'>
                    <table>
                        <tbody>
                            <tr>
                                <th className='row_name'>humidity</th>
                                <th className='row_value'>{this.props.weatherData.current.humidity} % </th>
                            </tr>
                            <tr>
                                <th className='row_name'>cloud</th>
                                <th className='row_value'>{this.props.weatherData.current.cloud} % </th>
                            </tr>
                            <tr>
                                <th className='row_name'>pressure</th>
                                <th className='row_value'>{this.props.weatherData.current.pressure_mb} mb </th>
                            </tr>
                            <tr>
                                <th className='row_name'>wind</th>
                                <th className='row_value'>{this.props.weatherData.current.wind_mph} mph</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
        //if this.props.weatherData is null, return spinner
        else {
            return (
                <div className='detailBlock'>
                    <CircularProgress />
                </div>
            )
        }
    }

    render() {
        return this.contentSelector()
    }
}

export default WeatherDetailBlock;