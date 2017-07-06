import React, {Component} from 'react'
import Home from './Home'
import How from './How'
import Borrow from './Borrow'
import Invest from './Invest'
import Marketplace from './Marketplace'
import About from './About'
import SliderBox from './SliderBox'
import {Route} from 'react-router-dom'

class Jumbotron extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <Route exact={true} path="/" component={Home}/>
              <Route path="/how-it-works" component={How}/>
              <Route path="/borrow" component={Borrow}/>
              <Route path="/invest" component={Invest}/>
              <Route path="/marketplace" component={Marketplace}/>
              <Route path="/about-us" component={About}/>
            </div>
          </div>
        </div>
        <br/>
        <Route exact={true} path="/" component={SliderBox}/>
      </div>
    )
  }
}

export default Jumbotron;