import React from 'react'
import Grid from '@material-ui/core/Grid';
import BackIcon from '@material-ui/icons/ArrowBack'
import Fab from '@material-ui/core/Fab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './CommonStyle.css'
import './WeatherPage.css'

import WeatherDetailBlock from '../components/WeatherDetailBlock'
import WeatherInfoCard from '../components/WeatherInfoCard'
import TwitterFeed from '../components/TwitterFeed'

import { getWeatherData } from '../static/getWeatherData'

//redux
import { connect } from 'react-redux'
import { changePageIndex, changeWeatherLocation, changeWeatherData } from '../actions'

class WeatherPage extends React.Component {
    constructor() {
        super();
        this.state = {
            //menu control
            menuParent: null
        };
    }

    // back to start page and set weather location and data to null
    setStartPage = () => {
        this.props.changePageIndex({ pageIndex: 'startPage' });
        this.props.changeWeatherLocation({ weatherLocation: null });
        this.props.changeWeatherData({ weatherData: null });
    }

    // change weather location and data
    setWeatherState = async (newLocation) => {
        this.props.changeWeatherLocation({ weatherLocation: newLocation })
        this.props.changeWeatherData({ weatherData: null })
        const weatherResponse = await getWeatherData(newLocation)
        this.props.changeWeatherData({ weatherData: weatherResponse })
    }

    handleClick = (e) => {
        //currentTarget:监听onClick的元素
        const clickId = e.currentTarget.id;
        const clickNodeName = e.currentTarget.nodeName
        //back to start page
        clickId === 'backToStartPage' && this.setStartPage();
        //open menu
        clickId === 'locationSpan' && this.setState({ menuParent: e.currentTarget });
        //change weather location and data and close menu
        clickNodeName === 'LI' && this.setWeatherState(e.currentTarget.innerText)
            && this.setState({ menuParent: null });
    }

    render() {
        const currentData = this.props.currentWeatherData
        const emptyDayList = [null, null, null, null, null, null, null]
        const currentDay = currentData ? currentData.forecast.forecastday[0] : null
        const dayList = currentData ? currentData.forecast.forecastday.slice(0) : emptyDayList
        return (
            <div className='backGround'>
                <div className='backButton'>
                    <Fab id='backToStartPage' onClick={this.handleClick} color="secondary">
                        <BackIcon />
                    </Fab>
                </div>

                <div className='reportCard'>
                    <Grid className='headerBlock' container spacing={0}>
                        <Grid className='block_part' item md={4} sm={12} xs={12}>

                            <span onClick={this.handleClick}
                                id='locationSpan'
                                className='headerTitle'>
                                {this.props.currentWeatherLocation}
                            </span>

                            <Menu
                                id="simple-menu"
                                anchorEl={this.state.menuParent}
                                open={Boolean(this.state.menuParent)}
                            >
                                <MenuItem onClick={this.handleClick}>Sydney</MenuItem>
                                <MenuItem onClick={this.handleClick}>Beijing</MenuItem>
                                <MenuItem onClick={this.handleClick}>Moscow</MenuItem>
                                <MenuItem onClick={this.handleClick}>Paris</MenuItem>
                            </Menu>

                        </Grid>
                        <Grid className='block_part' item md={4} sm={6} xs={6}>
                            <WeatherInfoCard weatherData={currentDay} />
                        </Grid>
                        <Grid className='block_part' item md={4} sm={6} xs={6}>
                            <WeatherDetailBlock weatherData={this.props.currentWeatherData} />
                        </Grid>
                    </Grid>

                    <Grid className='contentBlock' container spacing={0}>
                        <Grid className='block_part' item md={6} sm={6} xs={12}>
                            <Grid className='block_part' container spacing={0}>
                                {
                                    dayList.map((day, index) =>
                                        index !== 0 && (
                                            <Grid key={index} className='block_part' item md={4} sm={6} xs={6}>
                                                <WeatherInfoCard weatherData={day} />
                                            </Grid>
                                        )
                                    )
                                }
                            </Grid>
                        </Grid>
                        <Grid className='block_part' item md={6} sm={6} xs={12}>
                            <TwitterFeed sourceName={this.props.currentWeatherLocation} />
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentWeatherLocation: state.weather.weatherLocation,
        currentWeatherData: state.weather.weatherData
    }
}

export default connect(mapStateToProps, { changePageIndex, changeWeatherLocation, changeWeatherData })(WeatherPage)