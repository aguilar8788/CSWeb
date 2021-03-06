import React, {Component} from 'react'

class CandleSticks extends Component {
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
            },
            hideCandles: {
                display: '',
                webopacity: '',
                mozopacity: '',
                opacity: '',
                webkittransition: '',
                moztransition: '',
                mstransition: '',
                otransition: '',
                transition: ''
            }
        }
        this.handleScroll = this.handleScroll.bind(this)
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

        if (scrollTop > 20) {
            this.setState({
                hideCandles: {
                    webopacity: '0.1',
                    mozopacity: '0.1',
                    opacity: '0.1',
                    webkittransition: 'all 2s ease',
                    moztransition: 'all 2s ease',
                    mstransition: 'all 2s ease',
                    otransition: 'all 2s ease',
                    transition: 'all 2s ease'
                }
            })
        } else {
            this.setState({
                hideCandles: {
                    display: '',
                    webopacity: '0.99',
                    mozopacity: '0.99',
                    opacity: '0.99'
                }
            })
        }

        if (scrollTop > 300) {
            this.setState({
                hideCandles: {
                    display: 'none'
                }
            })
        }
    }

    render() {
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
        let logo = {
            height: this.state.logo.height,
            transition: this.state.logo.transition
        }
        let del = {
            display: this.state.hideCandles.display,
            WebkitOpacity: this.state.hideCandles.webopacity,
            MozOpacity: this.state.hideCandles.mozopacity,
            opacity: this.state.hideCandles.opacity,
            WebKitTransition: this.state.hideCandles.webkittransition,
            MozTransition: this.state.hideCandles.moztransition,
            msTransition: this.state.hideCandles.mstransition,
            OTransition: this.state.hideCandles.otransition,
            transition: this.state.hideCandles.transition
        }
        return(
            <div className="contentWrapper" style={del}>
            <div className="logo" style={logo}>
                <h1>Crypto currency</h1>
                <h1>for the rest of us!</h1>
            </div>
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
            </div>
        )
    }
}

export default CandleSticks