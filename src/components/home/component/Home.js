import React, {Component} from 'react'
import Images from './Images'
import MissionContent from './MissionContent'
import CandleSticks from './CandleSticks'
import JumboTron from './JumboTron'

class Home extends Component {
    constructor(props, context) {
        super(props, context)
    }


    render() {
        return(
            <div className="home">
                <div className="section1">
                        <CandleSticks />
                </div>
                <MissionContent/>
                <div className="section2">
                    <JumboTron/>
                </div>
                <Images/>
            </div>
        )
    }
}

export default Home