import React, { Component } from 'react'
import { connect } from 'react-redux'

import MarketBox from '../secure/MarketBox'
import Sidebar from './Sidebar'
import { fetchLoans, addBid } from '../../actions/loanActions'
import { socket } from '../../utils/SocketListener'
import refreshIcon from '../../images/refresh.svg'

class Marketplace extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault()
    console.log('refresh clicked')
  }

  componentWillMount() {
    this
      .props
      .fetchLoans()
  }

  componentDidMount() {
    const eb = socket;
    // Listen for messages coming in
    
      eb.registerHandler('new-bid-added', (error, message) => {
        this
          .props
          .addBid(JSON.parse(message.body))
      })
    

  }

  render() {
    return (

      <div className="row projects">
        <div className="col-md-8 ">
          <MarketBox loans={this.props.loan} />
          <br />
          <img className="center-block hand-pointer" src={refreshIcon} onClick={this.onClick} alt="refresh" />
        </div>
        <Sidebar />

      </div>
    )
  }
}

const mapSateToProps = state => {
  return { loan: state.get('loans') }
}


export default connect(mapSateToProps, { fetchLoans, addBid })(Marketplace)