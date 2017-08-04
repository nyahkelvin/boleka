import React, { Component } from 'react';

class LoanFooter extends Component {
    render() {
        return (

            <div className="form-inline ">
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="form-group">
                            <div className="col-xs-6">
                                <div className="input-group">
                                    <div className="input-group-addon">R</div>
                                    <input
                                        type="text"
                                        value={this.state.bid_amount}
                                        onChange={this.onChange}
                                        autoComplete="off"
                                        className="form-control"
                                        name="bid_amount"
                                        placeholder="Amount" />
                                </div>
                            </div>
                            <div className="col-xs-3">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        value={this.state.percentage}
                                        onChange={this.onChange}
                                        autoComplete="off"
                                        className="form-control interest"
                                        name="percentage"
                                        maxLength="4"
                                        id="interest"
                                        placeholder="%" />
                                    <div className="input-group-addon">%</div>
                                </div>
                            </div>
                            <div className="col-xs-2">
                                <button type="submit" className="btn btn-default">
                                    <span className="fa fa-check"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoanFooter