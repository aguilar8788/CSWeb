import React, { Component, PropTypes } from 'react'
import {Link, IndexLink} from 'react-router'
import NavBar from './common/navBar/component/NavBar'
import Footer from './common/footer/Footer'

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="head">
                    <NavBar />
                </div>

                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
}

export default App
