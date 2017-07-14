import React, {Component} from 'react'

import {Link} from 'react-router-dom'

class Register extends Component {
    render() {
        return (
            <div id="login-overlay" className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal"></button>
                        <h4 className="modal-title" id="myModalLabel">Become a Boleka member</h4>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="well">
                                    <form id="loginForm" >
                                        <div className="form-group">
                                            <label htmlFor="username" className="control-label">Valid RSA ID</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="username"
                                                name="username"
                                                autoComplete="off"
                                                value=""
                                                required=""
                                                title="Please enter you username"
                                                placeholder="Valid RSA ID"/>
                                            <span className="help-block"></span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="username" className="control-label">Email Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="username"
                                                name="username"
                                                autoComplete="off"
                                                value=""
                                                required=""
                                                title="Please enter you username"
                                                placeholder="Email Address"/>
                                            <span className="help-block"></span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="username" className="control-label">Password</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="username"
                                                name="username"
                                                autoComplete="off"
                                                value=""
                                                required=""
                                                title="Please enter you username"
                                                placeholder="Password"/>
                                            <span className="help-block"></span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="username" className="control-label">Confirm password</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="username"
                                                name="username"
                                                autoComplete="off"
                                                value=""
                                                required=""
                                                title="Please enter you username"
                                                placeholder="Confirm password"/>
                                            <span className="help-block"></span>
                                        </div>
                                        <div id="loginErrorMsg" className="alert alert-error hide">Wrong username og password</div>
                                        <button type="submit" className="btn btn-success btn-block">Register</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <p className="lead">Login now for
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
                                    <Link to="/login" className="btn btn-info btn-block">Yes please, login now!</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register