import React, {Component} from 'react'
import {connect} from 'react-redux'

import MarketBox from '../secure/MarketBox'
import Sidebar from './Sidebar'
import {fetchLoans, addBid} from '../../actions/loanActions'
import refreshIcon from '../../images/refresh.svg'

class Marketplace extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  
  onClick(e){
    e.preventDefault()
    console.log('refresh clicked')
  }
  
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
          <br />
          <img className="center-block hand-pointer" src={refreshIcon} onClick={this.onClick}  alt="refresh"/>
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