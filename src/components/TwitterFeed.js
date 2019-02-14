import React from 'react'
import { Timeline } from 'react-twitter-widgets'

class TwitterFeed extends React.Component {
    render() {
        return (
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: this.props.sourceName
                }}
                options={{
                    height: '300'
                }}
            />
        )
    }
}

export default TwitterFeed