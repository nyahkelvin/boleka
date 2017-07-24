import React, { Component } from 'react'

class SideBar extends Component {
  render() {
    return (
      <div id="sidebar">
        <div className="col-md-4" >
          <div className="marketplace-sidebar">
            <span className="label label-success">Investor's Corner</span>
            <ul>
              <li>Free loan bidding</li>
              <li>Free transfers to Boleka account</li>
              <li>Free account verification</li>
            </ul>

            <div className="description">
              No hidden fees. Lending to Boleka borrowers is a straightforward process.
            <br />
              You only pay once as show below.
          </div>
            <hr />
            <h4>1.2% Service fee.</h4>
            <hr />
            <small>
              <ul className="list-unstyled text-xs">
                <li>
                  <span className="fa fa-star">
                    Amount &amp; interest rate accepted.
                </span>
                </li>
                <li>
                  <span className="fa fa-star-half-o">
                    Amount &amp; interest rate partially accepted.
                </span>
                </li>
                <li>
                  <span className="fa fa-star-o">
                    Amount &amp; interest rate pending.
                </span>
                </li>
              </ul>
            </small>
            <br />
            <hr />
            <h4><label>Loan Filter</label></h4>
            <hr />
            <div className="description">
              <label>Min Amount: </label><input type="range" min="0" max="100" />
              <label>Max Amount: </label><input type="range" min="0" max="100" />
              <br />
              <span><label>Completed:</label> Yes <input type="radio" name="completed" value="YES" /> &nbsp; No <input type="radio" name="completed" value="NO" /></span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="marketplace-sidebar">
            <button className="btn btn-danger">Filter</button>
          </div>
        </div>

      </div>
    )
  }
}

export default SideBar;