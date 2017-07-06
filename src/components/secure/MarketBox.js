import React, {Component} from 'react'

import Box from '../secure/Box'


class MarketBox extends Component {

  render() {
    return (
      <Box loans={this.props.loans} />
    )
  }
}

export default MarketBox