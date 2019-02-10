import React from 'react'
import Grid from '@material-ui/core/Grid';
import BackIcon from '@material-ui/icons/ArrowBack'
import Button from '@material-ui/core/Button';
import './CommonStyle.css'
import './WeatherPage.css'

import WeatherDetailBlock from '../components/WeatherDetailBlock'

//redux
import { connect } from 'react-redux'
import { changePageIndex, changeWeatherLocation, changeWeatherData } from '../actions' 

class WeatherPage extends React.Component {
    handleClick = (e) => {
        //currentTarget:监听onClick的元素
        const clickId = e.currentTarget.id;
        //back to start page
        clickId === 'backToStartPage' && this.props.changePageIndex({pageIndex:'startPage'});
    }

    render() {
        return(
            <div className='backGround'>
                <Button id='backToStartPage' onClick={this.handleClick} variant="contained" color="secondary">
                    <BackIcon />
                </Button>
                <div className='reportCard'>
                    <Grid className='headerBlock' container spacing={0}>
                        <Grid className='headerBlock_part' item xs={6}>
                            <span className='headerTitle'>{this.props.currentWeatherLocation}</span>
                        </Grid>
                        <Grid className='headerBlock_part' item xs={6}>
                            <div className='headerInfo'>
                                {
                                    this.props.currentWeatherData && 
                                    <WeatherDetailBlock weatherData={this.props.currentWeatherData}/>
                                }
                            </div>
                        </Grid>
                    </Grid>
                    <Grid className='contentBlock' container spacing={0}>
                        2
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