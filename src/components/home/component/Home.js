import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Home extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            candle1: {
                marginTop: '',
                transition: '',
                height: '130px'
            },
            candle2: {
                marginTop: '',
                transition: '',
                height: '130px'

            },
            candle3: {
                marginTop: '',
                transition: '',
                height: '130px',
                color: ''
            },
            candle4: {
                marginTop: '',
                transition: '',
                height: '130px'
            },
            logo: {
                height: '',
                transition: ''
            }
        }
        this.handleScroll = this.handleScroll.bind(this)
        this.renderCandleSticks = this.renderCandleSticks.bind(this)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
        if (scrollTop < 20) {
            this.setState({
                candle1: {
                    marginTop: '',
                    transition: 'all 1.0s cubic-bezier(.25,.8,.25,1)'
                },
                candle2: {
                    marginTop: '',
                    transition: 'all 1.0s cubic-bezier(.25,.8,.25,1)',
                    height: '130px'
                },
                candle3: {
                    marginTop: '',
                    transition: 'all 1.0s cubic-bezier(.25,.8,.25,1)',
                    height: '130px'
                },
                candle4: {
                    marginTop: '',
                    transition: 'all 1.0s cubic-bezier(.25,.8,.25,1)',
                    height: '130px'
                },
                logo: {
                    height: '',
                    transition: 'all 1.0s cubic-bezier(.25,.8,.25,1)'
                }
            })
        } else {
            this.setState({
                candle1: {marginTop: '70px', transition: 'all 1.9s cubic-bezier(.25,.8,.25,1)'},
                candle2: {marginTop: '120px', transition: 'all 1.9s cubic-bezier(.25,.8,.25,1)', height: '80px'},
                candle3: {marginTop: '220px', transition: 'all 1.9s cubic-bezier(.25,.8,.25,1)', height: '40px', color: '#c43905'},
                candle4: {marginTop: '140px', transition: 'all 1.9s cubic-bezier(.25,.8,.25,1)', height: '40px', color: '#84BA4D'},
                logo: {height: (100 + scrollTop) + 'vh', transition: 'all 1.9s cubic-bezier(.25,.8,.25,1)'}
            })
        }
    }

    renderCandleSticks() {
          let candleStyle1 = {
            marginTop: this.state.candle1.marginTop,
            transition: this.state.candle1.transition
        }
        let candleStyle2 = {
            marginTop: this.state.candle2.marginTop,
            transition: this.state.candle2.transition,
            height: this.state.candle2.height

        }
        let candleStyle3 = {
            marginTop: this.state.candle3.marginTop,
            transition: this.state.candle3.transition,
            height: this.state.candle3.height,
            backgroundColor: this.state.candle3.color
        }
        let candleStyle4 = {
            marginTop: this.state.candle4.marginTop,
            transition: this.state.candle4.transition,
            height: this.state.candle4.height,
            backgroundColor: this.state.candle4.color
        }

        return (
            <div className="candles">
                <div className="wick" style={candleStyle1}>
                    <div className="candleStick1">
                    </div>
                </div>
                <div className="wick" style={candleStyle2}>
                    <div className="candleStick1">
                    </div>
                </div>
                <div className="wick" style={candleStyle3}>
                    <div className="candleStick1">
                    </div>
                </div>

                <div className="wick" style={candleStyle4}>
                    <div className="candleStick1">
                    </div>
                </div>
                <div className="wick wickRepeat" style={candleStyle1}>
                    <div className="candleStick1">
                    </div>
                </div>
                <div className="wick wickRepeat" style={candleStyle2}>
                    <div className="candleStick1">
                    </div>
                </div>
                <div className="wick wickRepeat" style={candleStyle3}>
                    <div className="candleStick1">
                    </div>
                </div>

                <div className="wick wickRepeat" style={candleStyle4}>
                    <div className="candleStick1">
                    </div>
                </div>
            </div>
        )
    }

    render() {
        let logo = {
            height: this.state.logo.height,
            transition: this.state.logo.transition
        }
        let currentTime = new Date()
        return(
            <div className="home">
                <div className="section1">
                    <div className="contentWrapper">
                        <div className="logo" style={logo}>
                            <h1>Crypto currency</h1>
                            <h1>for the rest of us!</h1>
                        </div>
                        {this.renderCandleSticks()}
                    </div>
                </div>
                <div className="contentWrapper2">
                    <div className="content">
                        <div className="subjectsHead">
                            <h1>What we do</h1>
                            <p>
                                Crypto can be a confusing subject to wrap your head around. The Crypto Savages are here to change that.
                                We take the convoluted subjects that encompass the block chain world, and explain it in a language that the
                                rest of us understands.
                            </p>
                        </div>
                        <div className="subjects">
                            <div className="subject">
                                <h1>Trading/Exchanges </h1>
                                <p>
                                    In depth explanations showing you how easy it is to get started with crypto trading. How is a crypto coin different from a stock
                                    We will get you up and running buying alt coins, and also show how to store them.
                                </p>
                            </div>
                            <div className="subject">
                                <h1>Blockchain Technology</h1>
                                <p>
                                    What is a blockchain? What significance does it play in cryptocurrency. Smart contracts, P2P, nodes, etc. If any of these words confuse you,
                                    then you come to our channel, and let us clear things up for you.
                                </p>
                            </div>
                            <div className="subject">
                                <h1>Hardware</h1>
                                <p>
                                    So you can buy crypto, but where do I store them now? What is the difference between a cold wallet, and a hot wallet. Where should I store my crypto once I buy it? We offer reviews on hardware wallets,
                                    exchanges, and wallet programs for your computer and phone.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section2">
                    <div className="followUs">
                        <h1 className="display-4">The Crypto Savages</h1>
                        <h2 className="lead">Crypto currency tutorials for the rest of us!</h2>
                        <hr className="my-4"/>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg" target="_blank" href="https://www.youtube.com/channel/UCNS1QZfqHVIGAEk2Ng_xHkA?view_as=subscriber" role="button">
                                Follow Us on YouTube
                            </a>
                        </p>
                    </div>
                </div>
                <div className="savages">
                    <div className="imageContainer">
                    <div className="bio">
                        <img className="savageImage" src={require('../../../images/JT.png')}/>
                        <p>Joe Tynan</p>
                        <p>Infrastructure Analyst</p>
                    </div>
                    <div className="bio">
                        <img className="savageImage" src={require('../../../images/PA.png')} />
                        <p>Peter Aguilar</p>
                        <p>Freelance web/iOS Developer.</p>
                    </div>
                    <div className="bio">
                        <img className="savageImage" src={require('../../../images/KV.png')} />
                        <p>Kiril Valtchev</p>
                        <p>Senior Risk Management Analyst</p>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

Home.propTypes = {

}

Home.contextTypes = {
    router: PropTypes.object
}

export default Home