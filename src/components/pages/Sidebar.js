import React, { Component } from 'react'

class SideBar extends Component {
    render() {
        return (
            <div className="col-md-4" id="sidebar">
          <div className="marketplace-sidebar">
            <span className="label label-success">Investor's Corner</span>
            <ul>
              <li>Free loan bidding</li>
              <li>Free transfers to Boleka account</li>
              <li>Free account verification</li>
            </ul>

            <div className="description">
              No hidden fees. Lending to Boleka borrowers is a straightforward process.
              <br/>
              You only pay once as show below.
            </div>
            <hr/>
            <h4>1.2% Service fee.</h4>
            <hr/>
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
          </div>

        </div>
        )
    }
}

export default SideBar;