import React, {Component} from 'react'

class Bidders extends Component {
    constructor(props) {
        super(props)
        this.state = {
            percentage: '',
            bid_amount: ''
        }
        this.onSubmit = this
            .onSubmit
            .bind(this)
        this.onChange = this
            .onChange
            .bind(this);
    }

    onSubmit(e) {
        e.preventDefault()
        console.log('submitted',this.state)
    }

    onChange(e) {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        let bids = this
            .props
            .bid
            .map((bid, i) => {
                return (
                    <div className="social-talk" key={i}>
                        <div className="media social-profile clearfix">
                            <a className="pull-left">
                                <img src={bid.bidder_avatar} alt="profile"/>
                            </a>

                            <div className="media-body">
                                <span className="font-bold">{bid.bidder}</span>
                                <small className="text-muted padding-text">{bid.bid_date}</small>

                                <div className="social-content">
                                    R{bid.bid_amount}
                                    <span className="fa fa-angle-double-right padding-text"></span>
                                    {bid.bid_interest}% interest.
                                    <span className="fa fa-star-half-o"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        return (
            <div className="panel-footer">
                {bids}
                {/**
               Start of loan footer
               */}
                <hr/>
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
                                            className="form-control"
                                            name="bid_amount"
                                            placeholder="Amount"/>
                                    </div>
                                </div>
                                <div className="col-xs-3">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            value={this.state.percentage}
                                            onChange={this.onChange}
                                            className="form-control interest"
                                            name="percentage"
                                            maxLength="4"
                                            id="interest"
                                            placeholder="%"/>
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
                {/**
               End of loan footer
               */}
            </div>
        )
    }
}

export default Bidders