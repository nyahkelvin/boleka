import React, {Component} from 'react'

import Box from '../secure/Box'


class MarketBox extends Component {

  render() {
    return (
      <Box handleAddBid={this.props.handleAddBid}  />
    )
  }
}

export default MarketBox