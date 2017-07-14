import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);

        this.state ={
            username: '',
            password: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e){
        e.preventDefault()
        console.log('login submitted')
        this.setState({
            username: '',
            password: ''
        })
    }

    onChange(e){
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
    }
    
    render() {
        return (
            <div id="login-overlay" className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal"></button>
                        <h4 className="modal-title" id="myModalLabel">Login to Boleka</h4>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="well">
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="username" className="control-label">Username</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="username"
                                                value={this.state.username}
                                                onChange={this.onChange}
                                                title="Please enter you username"
                                                placeholder="example@email.com"/>
                                            <span className="help-block"></span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="control-label">Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                value={this.state.password}
                                                onChange={this.onChange}
                                                title="Please enter your password"/>
                                            <span className="help-block"></span>
                                        </div>
                                        <div id="loginErrorMsg" className="alert alert-error hide">Wrong username og password</div>
                                        <button type="submit" className="btn btn-success btn-block">Login</button>
                                        <br />
                                        <a href="password-reset.html" >Forgot login details</a>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <p className="lead">Register now for
                                    <span className="text-success"> FREE</span>
                                </p>
                                <ul className="list-unstyled line-height">
                                    <li>
                                        <span className="fa fa-check text-success"></span>
                                        Manage loans and investments centrally</li>
                                    <li>
                                        <span className="fa fa-check text-success"></span>
                                        Decide your interest rate</li>
                                    <li>
                                        <span className="fa fa-check text-success"></span>
                                        Bank level security</li>
                                    <li>
                                        <span className="fa fa-check text-success"></span>
                                        Fast payouts</li>
                                    <li>
                                        <span className="fa fa-check text-success"></span>
                                        Get free alerts
                                        <small> (Email &amp; SMS)</small>
                                    </li>
                                    <li>
                                        <a href="/read-more/">
                                            <u>Read more</u>
                                        </a>
                                    </li>
                                </ul>
                                <p>
                                    <Link to="/register" className="btn btn-info btn-block">Yes please, register now!</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login