import React from 'react'
import Grid from '@material-ui/core/Grid';
import BackIcon from '@material-ui/icons/ArrowBack'
import Button from '@material-ui/core/Button';
import './CommonStyle.css'
import './WeatherPage.css'

import WeatherDetailBlock from '../components/WeatherDetailBlock'

//redux
import { connect } from 'react-redux'
import { changePageIndex, changeLocationState } from '../actions' 

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
                    <Grid container spacing={0}>
                        <Grid className='reportBlock_1' item xs={6}>
                        <span>{this.props.currentLocationState}</span>
                        </Grid>
                        <Grid className='reportBlock_2' item xs={6}>
                        <WeatherDetailBlock location={this.props.currentLocationState}/>
                        </Grid>
                        <Grid className='reportBlock_3' item xs={6}>
                        3
                        </Grid>
                        <Grid className='reportBlock_4' item xs={6}>
                        4
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentLocationState: state.location.locationState
    }
  }

export default connect(mapStateToProps, {changePageIndex, changeLocationState})(WeatherPage)