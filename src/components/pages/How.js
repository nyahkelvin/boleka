import React, {Component} from 'react'

class How extends Component {
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
                                                        Boleka is a simple concept. We don't do more than what we say we do.
                                                        <hr/>
                                                    </h4>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td width="33%">
                                                    <div className="center-div">
                                                        <img
                                                            src="http://boleka.co.za/images/borrow_icon_right.png"
                                                            alt="borrow"
                                                            width="60"
                                                            height="77"/>
                                                    </div>
                                                </td>
                                                <td width="33%">
                                                    <div className="center-div">
                                                        <img
                                                            src="http://boleka.co.za/images/boleka_cloud.png"
                                                            alt="cloud"
                                                            width="82"
                                                            height="82"/>
                                                    </div>
                                                </td>
                                                <td width="33%">
                                                    <div className="center-div">
                                                        <img
                                                            src="http://boleka.co.za/images/borrow_icon.png"
                                                            alt="borrow"
                                                            width="60"
                                                            height="77"/>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="center-div">
                                                        Borrower
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="center-div">
                                                        Match borrowers to lenders
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="center-div">
                                                        Lender
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div id="left-panel">
                                    <h4>
                                        Its very simple
                                    </h4>
                                    <div className="description">
                                        Creditworthy Borrowers are looking for a low cost loan. Smart Savers are looking
                                        for a better return. We match them up and ensure everyone gets what they've been
                                        promised. One investor lends to lots of creditworthy borrowers spreading their
                                        risk. One borrower borrows from lots of different investors and accepts the
                                        lowest interest rate offers. Investors get great returns and borrowers get lower
                                        cost loans, fast.
                                        <div id="white-space"></div>
                                    </div>
                                </div>
                            </td>
                            <td width="30%" className="valign">
                                <div id="right-panel">
                                    <div>
                                        How it works (English Only)
                                        <div id="white-space"></div>
                                        <ul>
                                            <li className="">
                                                <a href="borrow.html">How to borrow</a>
                                            </li>
                                            <li className="">
                                                <a href="invest.html">How to invest
                                                </a>
                                            </li>
                                        </ul>
                                        <hr/>
                                        <ul>
                                            <li className="">
                                                <a href="">Micro Finance</a>
                                            </li>
                                            <li className="">
                                                <a href="">Stokvels</a>
                                            </li>
                                            <li className="">
                                                <a href="">Partners</a>
                                            </li>
                                        </ul>
                                        <div id="white-space"></div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default How