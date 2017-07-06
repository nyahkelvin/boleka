import React, {Component} from 'react';
import Registration from '../auth/Registration'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="col-md-6">
          <span className="heading">
            Borrow cheaper,
            <br/>
            invest better
            <br/>
            socially.
          </span>
          <p className="subheading">
            Borrowers &amp; investors decide how much interest they want on a loan. Isn't
            that awesome?
          </p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5">

          <Registration/>

          <br/>
          <br/>
          <small>By clicking Sign Up. It's free & will always be! button, you agree to our
            <a href="" target="_blank">
              Terms of Service</a>
            and you have read our
            <a href="" target="_blank">Privacy Policy</a>
          </small>

        </div>
      </div>
    );
  }
}

export default Home;