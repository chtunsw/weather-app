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
        this.props.changePageIndex({pageIndex:'startPage'});
        this.props.changeWeatherLocation({weatherLocation: null});
        this.props.changeWeatherData({weatherData: null});
    }

    // change weather location and data
    setWeatherState = async(newLocation) => {
        this.props.changeWeatherLocation({weatherLocation: newLocation})
        const weatherResponse = await getWeatherData(newLocation)
        this.props.changeWeatherData({weatherData: weatherResponse})
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
        return(
            <div className='backGround'>
                <div className='backButton'>
                    <Fab id='backToStartPage' onClick={this.handleClick} color="secondary">
                        <BackIcon />
                    </Fab>
                </div>

                <div className='reportCard'>
                    <Grid className='headerBlock' container spacing={0}>
                        <Grid className='headerBlock_part' item xs={6}>
                        
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
                                <MenuItem onClick={this.handleClick}>New York</MenuItem>
                            </Menu>

                        </Grid>
                        <Grid className='headerBlock_part' item xs={3}>
                            {
                                this.props.currentWeatherData && 
                                <WeatherInfoCard weatherData={this.props.currentWeatherData.forecast.forecastday[0]}/>
                            }
                        </Grid>
                        <Grid className='headerBlock_part' item xs={3}>
                            {
                                this.props.currentWeatherData && 
                                <WeatherDetailBlock weatherData={this.props.currentWeatherData}/>
                            }
                        </Grid>
                    </Grid>
                    <Grid className='contentBlock' container spacing={0}>
                        {
                            this.props.currentWeatherData && 
                            this.props.currentWeatherData.forecast.forecastday.map( (day, index) => 
                                index !== 0 && (
                                    <Grid key={index} className='contentBlock_part' item xs={2}>
                                        <WeatherInfoCard weatherData={day}/>
                                    </Grid>
                                )
                            )
                            }
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

export default connect(mapStateToProps, {changePageIndex, changeWeatherLocation, changeWeatherData})(WeatherPage)