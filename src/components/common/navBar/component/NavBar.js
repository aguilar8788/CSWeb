import React, {Component} from 'react'
import {IndexLink} from 'react-router'

class NavBar extends Component {
    constructor(props, context) {
        super(props, context)
        this.showSocialDropDown = this.showSocialDropDown.bind(this)
        this.showNavMobile = this.showNavMobile.bind(this)
    }

    componentWillMount() {
        let width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

        this.setState({showSocial: false})

        if (width < 500) {
            this.setState({showNavMobile: false})
        } else {
            this.setState({showNavMobile: true})
        }
    }

    componentWillUnmount() {

    }

    showSocialDropDown() {
        let showSocialBool = this.state.showSocial
        this.setState({showSocial: !showSocialBool})
    }

    showNavMobile() {
        let width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

        if (width < 500) {
            let showNavMobile = this.state.showNavMobile
            this.setState({showNavMobile: !showNavMobile})
        }
    }

    render () {
        return (
            <nav className="navigation navbar fixed-top">
                <div className="logo">
                    <IndexLink className="logoLink" to="/" activeClassName="active"><h1>THE CRYPTO SAVAGES</h1></IndexLink>
                    <a href="#" onClick={this.showNavMobile}><img className="hamburgerMenu" src={require('../../../../images/list.png')} /></a>
                </div>
                <ul className="navigationLinks" style={this.state.showNavMobile  === false ? {display: 'none'} : {display: 'flex'}}>
                    {/*<li><IndexLink to="/data" activeClassName="active">Data</IndexLink></li>*/}
                    {/*<li><IndexLink to="/crypto" activeClassName="active">Crypto</IndexLink></li>*/}
                    {/*<li><IndexLink to="/blockchain" activeClassName="active">Blockchain</IndexLink></li>*/}
                    {/*<li><IndexLink to="/exchanges" activeClassName="active">Exchanges</IndexLink></li>*/}
                    {/*<li><IndexLink to="/discussions" activeClassName="active">Discussions</IndexLink></li>*/}
                    <li><IndexLink to="/blog" activeClassName="active">Blog</IndexLink></li>
                    {/*<li><IndexLink to="/contact" activeClassName="active">Contact</IndexLink></li>*/}
                    <li className="socialDropDown" onClick={this.showSocialDropDown}><a href="#">Social Media</a></li>
                    <ul className="socialMedia dropdown-menu" onMouseLeave={this.showSocialDropDown} style={this.state.showSocial  === false ? {display: 'none'} : {display: 'inline-block'}}>
                        <li><a className="socialBrands dropdown-item" href="https://www.youtube.com/channel/UCNS1QZfqHVIGAEk2Ng_xHkA?view_as=subscriber" target="_blank">youtube</a></li>
                        {/*<li><a className="socialBrands dropdown-item" href="#" target="_blank">facebook</a></li>*/}
                        <li><a className="socialBrands dropdown-item" href="https://twitter.com/crypto_savages" target="_blank">twitter</a></li>
                    </ul>
                </ul>
            </nav>
        )
    }
}

export default NavBar