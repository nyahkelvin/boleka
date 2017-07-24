import React, {Component} from 'react';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear()
        return (
            <div className="container">
                <hr/>
                <div className="row">
                    <div className="col-md-3">
                        <h5>Boleka</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="about-us.html">About us</a>
                            </li>
                            <li>
                                <a href="contact-us.html">Contact</a>
                            </li>
                            <li>
                                <a href="how-it-works.html">How it works</a>
                            </li>
                            <li>
                                <a href="">Blog</a>
                            </li>
                            <li>
                                <a href="">Careers</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Services</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="">Personal Loan</a>
                            </li>
                            <li>
                                <a href="">Business Loans</a>
                            </li>
                            <li>
                                <a href="">Investment</a>
                            </li>
                            <li>
                                <a href="">Micro Finance</a>
                            </li>
                            <li>
                                <a href="">Stokvels</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Legal</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="">Terms of Service</a>
                            </li>
                            <li>
                                <a href="">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="">FAQ</a>
                            </li>
                            <li>
                                <a href="">FICA</a>
                            </li>
                            <li>
                                <a href="">NCR</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Applications</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="">Mobile</a>
                            </li>
                            <li>
                                <a href="">Developers</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pull-right text-muted text-sm">&copy;2013-{currentYear} Boleka RIG Pty Ltd &reg;. All rights reserved</div>
            </div>
        )
    }
}

export default Footer;