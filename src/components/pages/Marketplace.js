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
          <MarketBox loans={this.props.loans} addBid={addBid}/>
        </div>
        <Sidebar/>

      </div>
    )
  }
}

const mapSateToProps = state => {
  return {loans: state.loans.loans}
}


export default connect(mapSateToProps, {fetchLoans, addBid})(Marketplace)