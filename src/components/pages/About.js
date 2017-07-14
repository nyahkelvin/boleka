import React, {Component} from 'react'
import jsky from '../../images/jsky.jpg'

class About extends Component {
    render() {
        return (
            <div>
                <table width="100%" cellPadding="0" cellSpacing="0">
                    <tbody>
                        <tr>
                            <td width="70%" colSpan="2" className="valign">
                                <div
                                    style={{
                                    marginBottom: 10
                                }}>
                                    <img src={jsky} width="100%" height="139" alt="jsky"/>
                                </div>
                                <div id="left-panel">
                                    <h3>
                                        About Us
                                    </h3>
                                    <div className="description">
                                        Welcome to Boleka, South Africa's social lending network. At Boleka, we don't do
                                        more than this: Creditworthy Borrowers want a low cost loan. Smart Investors
                                        want a better return. We match them up and ensure everyone gets what they've
                                        been promised.
                                        <div id="white-space"></div>
                                    </div>
                                    <h3>
                                        Mission
                                    </h3>
                                    <div className="description">
                                        Our mission is simple: connect South African borrowers / businesses to access
                                        fast, low cost loans and investors to get greater return on investments. When
                                        you join Boleka, you get access to quality borrowers, investors, news, updates,
                                        and insights that help you to get what you want.
                                        <div id="white-space"></div>
                                    </div>
                                    <hr/>
                                    <h3>
                                        Company Info
                                    </h3>
                                    <div className="description">
                                        Boleka started out in the living room of CIO / co-founder
                                        <a
                                            href="http://www.twitter.com/kelvinashu"
                                            target="_blank"
                                            rel="noopener noreferrer"> Kelvin Ashu</a>
                                        in 2012, and it officially launched on April 27, 2013. 27 April being Freedom
                                        Day in South Africa was chosen as launch date to signify finanicial power given
                                        back to the people, eliminate traditional bankers with excessive charges.
                                    </div>
                                    <div className="description">
                                        <br/>
                                        <a
                                            href="http://www.twitter.com/zonkefana"
                                            target="_blank"
                                            rel="noopener noreferrer">Zonke Fana</a>
                                        is the CEO / co-founder, and the company's management team is made up of
                                        seasoned professionals from companies like Vodacom, FNB, Discovery, EMC2, and
                                        Deposita Systems.
                                    </div>
                                    <br/>
                                    <div className="description">
                                        Boleka is privately held and has a diversified business model with revenues
                                        coming from member transactions and advertising sales.
                                        <div id="white-space"></div>
                                    </div>
                                </div>
                            </td>
                            <td width="30%" className="valign">
                                <div id="right-panel">
                                    <div>
                                        More about Boleka (English Only)
                                        <div id="white-space"></div>
                                        <ul>
                                            <li className="">
                                                <a href="">Contact Us</a>
                                            </li>
                                            <li className="">
                                                <a href="">Partners</a>
                                            </li>
                                            <li className="">
                                                <a href="">Blog</a>
                                            </li>
                                            <li className="">
                                                <a href="">Careers</a>
                                            </li>
                                        </ul>
                                        <hr/>
                                        <ul>
                                            <li className="">
                                                <a href="">Mobile</a>
                                            </li>
                                            <li className="">
                                                <a href="">Developers</a>
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
        )
    }
}

export default About