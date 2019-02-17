import React, { Component } from 'react';
import StartPage from './pages/StartPage'
import WeatherPage from './pages/WeatherPage'

//redux
import { connect } from 'react-redux'

class App extends Component {
  render() {
    switch (this.props.currentPageIndex) {
      case 'startPage':
        return <StartPage />
      case 'weatherPage':
        return <WeatherPage />
      default:
        return <StartPage />
    }
  }
}

function mapStateToProps(state) {
  return {
    currentPageIndex: state.page.pageIndex,
  }
}

export default connect(mapStateToProps)(App);
