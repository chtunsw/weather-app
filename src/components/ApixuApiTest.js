import React from 'react'
import axios from 'axios'

class ApixuApiTest extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            weather: null
        }
    }
    componentDidMount = async () => {
        const weatherInfo = await axios.get('http://api.apixu.com/v1/current.json?key=a027b8abca1f45809a594902192301&q=Paris')
        this.setState({weather:weatherInfo.data})
        //console.log(this.state.weather)
    }

    render() {
        return(
            <div>
                {this.state.weather && this.state.weather.location.name}
            </div>
        )
    }
}

export default ApixuApiTest;