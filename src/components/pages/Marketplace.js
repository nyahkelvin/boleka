import React, {Component} from 'react'
import {connect} from 'react-redux'

import MarketBox from '../secure/MarketBox'
import Sidebar from './Sidebar'
import {fetchLoans, addBid} from '../../actions/loanActions'

class Marketplace extends Component {
  
  componentWillMount() {
    this
      .props
      .fetchLoans()
  }
  
  render() {
    return (

      <div className="row projects">
        <div className="col-md-8 ">
          <MarketBox loans={this.props.loan} addBid={this.props.addBid}/>
        </div>
        <Sidebar/>

      </div>
    )
  }
}

const mapSateToProps = state => {
  return {loan:  state.get('loans')}
}


export default connect(mapSateToProps, {fetchLoans, addBid})(Marketplace)