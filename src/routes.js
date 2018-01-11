import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Home from './components/home/component/Home'
import Data from './components/data/component/Data'
import Crypto from './components/crypto/component/Crypto'
import BlockChain from './components/blockchain/component/BlockChain'
import Exchanges from './components/exchanges/component/Exchanges'
import Discussions from './components/discussions/component/Discussion'
import Contact from './components/contact/component/Contact'
import Blog from './components/blog/component/Blog'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/data" component={Data} />
        <Route path="/crypto" component={Crypto} />
        <Route path="/blockchain" component={BlockChain} />
        <Route path="/exchanges" component={Exchanges} />
        <Route path="/discussions" component={Discussions} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
    </Route>
)
