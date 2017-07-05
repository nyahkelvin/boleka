import React, { Component } from 'react';
import borrowIcon from '../../images/borrow_icon.png'
import fundsIcon from '../../images/funds.png'
import repaymentIcon from '../../images/repayment.png'

class Borrow extends Component {
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
                                Borrowing from Boleka investors is a fair and most human way of getting a low-cost loan and applying is a straightforward process.
                                <hr />
                                </h4>
                            </td>
                            </tr>
                            </tbody>
                            <tbody>
                            <tr>
                            <td width="33%">
                                <div className="text-align">
                                <img src={borrowIcon} alt="borrow" width="60" height="77" />
                                </div>
                            </td>
                            <td width="33%">
                                <div className="text-align">
                                <img src={fundsIcon} alt="funds" width="61" height="78" />
                                </div>
                            </td>
                            <td width="33%">
                                <div className="text-align">
                                <img src={repaymentIcon} alt="repayment" width="86" height="87" />
                                </div>
                            </td>
                            </tr>
                            </tbody>
                            <tbody>
                            <tr>
                            <td>
                                <div className="text-align">
                                Register and apply online in minutes
                                </div>
                            </td>
                            <td>
                                <div className="text-align">
                                Get funded
                                </div>
                            </td>
                            <td>
                                <div className="text-align">
                                Make fixed monthly payments
                                </div>
                            </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                        <div id="left-panel">
                        <h4>
                            OK. So how does it work?
                        </h4>
                        <hr/>
                        <div className="description">
                            Basically, we remove that inefficient middleman (the bank) because you borrow money from Boleka lenders who are real people just like you. They're not necessarily wealthy people; they're just looking to earn a bit more interest on their spare cash than
                            the bank will pay them from their savings. Don't worry though, Boleka keep everyone's personal details private and we make sure that you get the very cheapest quote available on our marketplace when you apply.
                            <div id="white-space">
                            </div>
                        </div>
                        <h3>
                            Rest Assured
                        </h3>
                        <div className="description">
                            We credit check everybody who applies for a Boleka loan because we obviously have a responsibility to make sure that Boleka lender's money will be paid back, the good news is that the credit search we use to give you your personalised quote doesn't
                            leave a mark on your credit file or impact your credit score.
                            <div id="white-space">
                            </div>
                            A Boleka loan agreement is at a fixed rate over a fixed term – the rate will not change over the life of the loan and the lenders cannot suddenly decide to ask for their money back early if you make all your repayments on time.
                            <div id="white-space">
                            </div>
                            On the other hand though, you can decide to repay your loan early with absolutely no penalties or admin charges for doing so.
                            <div id="white-space">
                            </div>
                            There are no upfront costs to applying for a Boleka loan. We charge a fixed fee on each loan that is approved which is deducted from the loan amount. If you decide to cancel your application or you're not successful, there's no charge at all.
                            <div id="white-space">
                            </div>
                            There are no sneaky terms and a condition, what you see is what you get – the fee you pay when your loan is approved is the only fee Boleka earns. That's it.
                            <div id="white-space">
                            </div>
                            We keep all your personal details safe and never, ever, sell them on to any third parties.
                        </div>
                        <div id="white-space">
                        </div>
                        </div>
                    </td>
                    <td width="30%" className="valign">
                        <div id="right-panel">
                        <h2 className="text-warning">Transparent Pricing</h2>
                        <p>
                            <span className="label label-success">Borrowers</span>
                        </p>
                        <ul>
                            <li>Free loan application</li>
                            <li>Free transfers to Boleka account</li>
                            <li>Free credit check</li>
                            <li>Free loan application</li>
                            <li>Free debt default notication (Email &amp; SMS)</li>
                            <li>R25 debt default notication (Post Office)</li>
                            <li>2.5% once off initiation fee</li>
                        </ul>
                        
                            <div className="description">
                            Lending from Boleka investors is a straightforward process.
                        </div>
                        
                        <hr/>

                        <h4>R30 / Month for service fee</h4>
                        <hr />
                        </div>
                    </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Borrow