import React, {Component} from 'react'
import {connect} from 'react-redux'

import {login} from '../../actions/userActions'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.onSubmit = this
            .onSubmit
            .bind(this)
        this.onChange = this
            .onChange
            .bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isLoggedIn) {
            this
                .props
                .history
                .push('/marketplace')
        }
    }

    onSubmit(e) {
        e.preventDefault()
        this
            .props
            .login(true)
        this.setState({username: '', password: ''})
    }

    onChange(e) {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form id="signin" onSubmit={this.onSubmit} className="navbar-form navbar-right">
                    <div className="input-group hspace">
                        <span className="input-group-addon">
                            <i className="glyphicon glyphicon-user"></i>
                        </span>
                        <input
                            type="email"
                            name="username"
                            className="form-control input-sm"
                            onChange={this.onChange}
                            value={this.state.username}
                            placeholder="Email Address"/>
                    </div>
                    <div className="input-group hspace">
                        <span className="input-group-addon">
                            <i className="glyphicon glyphicon-lock"></i>
                        </span>
                        <input
                            type="password"
                            name="password"
                            className="form-control input-sm"
                            onChange={this.onChange}
                            value={this.state.password}
                            placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-info btn-sm">Login</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.getIn(['user', 'isLoggedIn']),
        redirectURL: state.getIn(['user', 'redirectURL'])
    }
}

export default connect(mapStateToProps, {login})(Login)