import React, { Component } from 'react'
import {connect} from 'react-redux'
import {logout} from '../../actions/userActions'

class Login extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(e){
        e.preventDefault()
        this.props.logout(false)
    }
   
    
    render() {
        return (
            <div>
                <form id="signin" onSubmit={this.onSubmit} className="navbar-form navbar-right" >
                <button type="submit" className="btn btn-info btn-sm">Logout</button>
              </form>
            </div>
        )
    }
}

export default connect(null, {logout})(Login)