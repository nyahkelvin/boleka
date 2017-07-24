import React, {Component} from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class SliderBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 7000,
            duration: 6
        }
        this.handleChangeAmount = this
            .handleChangeAmount
            .bind(this)
    }

    handleChangeAmount = amount => {
        this.setState({amount: amount})
    };

    handleChangeDuration = duration => {
        this.setState({duration: duration})
    };

    render() {
        const {amount, duration} = this.state
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="valign">
                                        <table >
                                            <tbody>
                                                <tr>
                                                    <td className="valignMiddle">
                                                        <img
                                                            src="http://boleka.co.za/images/Apps-calc-icon.png"
                                                            alt="calculator"
                                                            width="64"
                                                            height="64"/>
                                                    </td>
                                                    <td className="valignMiddle">
                                                        <strong>
                                                            Boleka Loan Calculator:
                                                        </strong>
                                                        <br/>
                                                        <small>This is an estimate only calculator. For actual values, please
                                                        <a href="register.html"> register</a> or<a href="login.html"> sign in</a>.</small>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <br/>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>
                                        <Slider
                                            min={3000}
                                            max={10000}
                                            value={amount}
                                            onChange={this.handleChangeAmount}/>

                                        <br/>
                                        <Slider min={1} max={24} value={duration} onChange={this.handleChangeDuration}/>
                                        <span id="js-display-change" className="calculator-text">Borrowing R{amount}</span>
                                        <i className="fa a fa-credit-card-alt" aria-hidden="true"></i><span className="calculator-text"/>
                                        <span id="js-display-change-month" className="calculator-text">
                                            Repayment period: {duration}
                                            Month(s)</span>
                                        <br/>
                                        <span className="text-info">
                                            <span id="interestRate">10.5%</span>
                                        </span>
                                        REP. APR* &nbsp;&nbsp;&nbsp;&raquo;&raquo; &nbsp;&nbsp;&nbsp;Monthly cost:
                                        <span className="text-info">
                                            <span id="amountFinal">
                                                R5088.00
                                            </span>&nbsp;&nbsp;
                                            <a href="" className="btn btn-info btn-xs">Apply now!</a>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-6">
                        <div className="pull-right">
                            <img src="http://boleka.co.za/images/network.png" alt="network"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SliderBox