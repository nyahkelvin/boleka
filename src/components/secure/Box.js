import React, {Component} from 'react';

import Bidders from './Bidders'

class Box extends Component {
    render() {
        let box = this
            .props
            .loans
            .map((loan, i) => {
                return (
                    <div className={`hpanel ${loan.risk_alert} projects-separtor`} key={i}>
                        <div className="panel-body">
                            <span className="label label-success pull-right">R{loan.balance}
                                &nbsp;Short</span>
                            <div className="row">
                                <div className="col-sm-8 animated-panel zoomIn animation">
                                    <h4>
                                        <a href="">{loan.loan_type}</a>
                                        <small className="muted padding-text">{loan.time_left}
                                            hrs left!
                                        </small>
                                    </h4>

                                    <div className="market-header">
                                        {loan.description}
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-3 animated-panel zoomIn animation">
                                            <div className="project-label">INTEREST</div>
                                            <small>{loan.loan_interest}%</small>
                                        </div>
                                        <div className="col-sm-3 animated-panel zoomIn animation">
                                            <div className="project-label">RISK</div>
                                            <i className={`fa fa-circle ${loan.risk_level}`}></i>
                                        </div>
                                        <div className="col-sm-3 animated-panel zoomIn animation">
                                            <div className="project-label">PERIOD</div>
                                            <small>{loan.payment_period}
                                                Month(s)</small>
                                        </div>
                                        <div className="col-sm-3 animated-panel zoomIn animation">
                                            <div className="project-label">PROGRESS</div>
                                            <div className="progress m-t-xs full progress-small">
                                                <div
                                                    style={{
                                                    width: loan.loan_progress
                                                }}
                                                    aria-valuemax="100"
                                                    title="95% completed"
                                                    aria-valuemin="0"
                                                    aria-valuenow="50"
                                                    role="progressbar"
                                                    className=" progress-bar progress-bar-success"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 project-info animated-panel zoomIn animation">
                                    <div className="project-action m-t-md"></div>
                                    <div className="project-value">
                                        <h2 className="text-info">
                                            R{loan.loan_amount}
                                        </h2>
                                    </div>
                                    <div className="project-people">
                                        <img
                                            alt="logo_image"
                                            className="img-circle"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="R7500@9.5%"
                                            src={loan.borrower_avatar}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Bidders */}
                        <Bidders bid={loan.bids}/>
                    </div>
                )
            })
        return (
            <div>
                {box}
            </div>
        )
    }
}

export default Box;