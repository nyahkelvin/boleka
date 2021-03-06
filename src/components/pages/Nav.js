import React, {Component} from 'react'
import LoginBar from '../pages/LoginBar'
import Logout from '../pages/Logout'
import logo from '../../images/boleka.png'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button
                                type="button"
                                className="navbar-toggle collapsed"
                                data-toggle="collapse"
                                data-target="#navbar"
                                aria-expanded="false"
                                aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className="navbar-header">
                                <Link to="/">
                                    <img src={logo} alt="Boleka" className="navbar-brand"/>
                                </Link>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse" id="navbar">
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to="/how-it-works">How it works</Link>
                                </li>
                                <li>
                                    <Link to="/borrow">Borrow</Link>
                                </li>
                                <li>
                                    <Link to="/invest">Invest</Link>
                                </li>
                                <li>
                                    <Link to="/marketplace">Marketplace</Link>
                                </li>
                                <li>
                                    <Link to="/about-us">About</Link>
                                </li>
                            </ul>
                            <div id="navbar" className="navbar-collapse collapse">
                                {!this.props.loggedIn
                                    ? <LoginBar/>
                                    : <Logout/>}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.getIn(['user', 'isLoggedIn'])
    }
}

export default connect(mapStateToProps)(Nav)