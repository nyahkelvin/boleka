import React, { Component } from 'react'

class Invest extends Component {
    render() {
        return (
            <div>
                    <table width="100%" cellPadding="0" cellSpacing="0">
                    <tbody>
                    <tr>
                    <td width="70%" colSpan="2" className="valign">
                        <div className="tableSpace">
                        <table width="100%">
                            <tbody>
                            <tr>
                            <td colSpan="3">
                                <h4 className="borrow_header">
                                Lending to Boleka borrowers is a straightforward process.
                                <hr />
                                </h4>
                            </td>
                            </tr>
                            </tbody>
                            <tbody>
                            <tr>
                            <td width="33%">
                                <div className="valignCentre">
                                <img src="http://boleka.co.za/images/borrow_icon.png" alt="borrow" width="60" height="77" />
                                </div>
                            </td>
                            <td width="33%">
                                <div className="valignCentre">
                                <img src="http://boleka.co.za/images/repayment.png" alt="repayment" width="86" height="87" />
                                </div>
                            </td>
                            <td width="33%">
                                <div className="valignCentre">
                                <img src="http://boleka.co.za/images/funds.png" alt="funds" width="61" height="78" />
                                </div>
                            </td>
                            </tr>
                            </tbody>
                            <tbody>
                            <tr>
                            <td>
                                <div className="valignCentre">
                                Register and invest
                                </div>
                            </td>
                            <td>
                                <div className="valignCentre">
                                Lend to borrowers
                                </div>
                            </td>
                            <td>
                                <div className="valignCentre">
                                Get greate returns
                                </div>
                            </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                        <div id="left-panel">
                        <h4>
                            How to invest
                        </h4>
                        <hr/>
                        <div className="description">
                            As a Boleka investor, we allow you to set your own terms; you can tailor your lending to suit you. You are allowed to spread your money across a number of profiles/borrowers – this is proven to be a risk minimiser. You can fund a loan in full or as a
                            percentage, whichever way that suits you. Lending starts from as little as R500.00. It's as simple as the following 3 steps.
                            <div id="white-space">
                            </div>
                        </div>
                        <h3>
                            1. Choose a rate, risk level, and time period
                        </h3>
                        <div className="description">
                            Choose a rate and risk level which Boleka provides for each borrower. You set your rates dependent on the level of risk you're comfortable with. There are different risk levels 0 to 5. You can then choose to lend for a shorter period (1-12 Months) or
                            a longer period (1-3 years).
                            <div id="white-space">
                            </div>
                        </div>
                        <h3>
                            2. Transfer your money in
                        </h3>
                        <div className="description">
                            You transfer money into your Boleka account and it's made available to borrowers at the terms you set. You can withdraw your offer but only before the borrower accepts, you cannot withdraw if it has already been accepted.
                            <div id="white-space">
                            </div>
                        </div>
                        <h3>
                            3. Your money gets lent out
                        </h3>
                        <div className="description">
                            We match your lending offers to loan requests from borrowers. You can see how much you've lent, who's borrowed from you and how much is still available when you sign into your account. You will receive repayments and interest each month which you can
                            withdraw or lend out again.
                            <div id="white-space">
                            </div>
                        </div>
                        <hr />
                        <h4>
                            Why invest at Boleka
                        </h4>
                        <div className="description">
                            The Boleka marketplace is open to like-minded people and business. There are many different reasons for lending, and many different ways to lend. The following reasons are just a few on why you should invest with Boleka.
                            <a href="why-invest.html">Click here</a>
                            <div id="white-space">
                            </div>
                        </div>
                        </div>
                    </td>
                    <td width="30%" className="valign">
                        <div id="right-panel">
                        <h2 className="text-warning">Transparent Pricing</h2>
                        <p>
                            <span className="label label-success">Investors</span>
                        </p>
                        <ul>
                            <li>Free loan bidding</li>
                            <li>Free transfers to Boleka account</li>
                            <li>Free account verification</li>
                        </ul>
                        <div className="description text-padding">
                            No hidden fees. Lending to Boleka borrowers is a straightforward process.<br/> You only pay once as show below.
                        </div>
                            
                        <hr/>
                        <h4>1.2% Service fee.</h4>
                        <hr/>
                        </div>
                    </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Invest