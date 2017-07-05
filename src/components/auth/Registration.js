import React, { Component } from 'react';

class Registration extends Component {
    render() {
        return (
            <div>
               <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <span className="glyphicon glyphicon-certificate"></span>
                        </span>
                        <input type="text" className="form-control" name="Username" id="Username" placeholder="Valid RSA ID" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <span className="glyphicon glyphicon-envelope"></span>
                        </span>
                        <input type="text" className="form-control" name="Email" id="Email" placeholder="Email Address"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <span className="glyphicon glyphicon-lock"></span>
                        </span>
                        <input type="password" className="form-control" name="password" id="password" placeholder="Password"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <span className="glyphicon glyphicon-resize-vertical"></span>
                        </span>
                        <input type="password" className="form-control" name="confirm" id="confirm" placeholder="Confirm Password"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="g-recaptcha " data-sitekey="6Le0AwATAAAAAF8nmEOPYJfIDFo3KnRc8Tt-W3tf"></div>
                      </div>
                    </div>
                    <input type="submit" name="submit" id="submit" value="Sign Up. It's free & will always be!" className="btn btn-success btn-md pull-left"/> 
            </div>
        );
    }
}

export default Registration;