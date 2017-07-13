import uuid from 'uuid'

import faker from 'faker'
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    loans: [
        {
            id: uuid.v4(),
            borrower_avatar: `${faker.image.avatar()}`,
            loan_amount: 6800,
            balance: 600,
            time_left: 78,
            loan_type: 'Payday loan',
            description: `${faker.lorem.paragraph()}`,
            loan_interest: 11.8,
            risk_level: 'text-success',
            risk_alert: 'hgreen',
            payment_period: 8,
            loan_progress: 100,
            bids: [
                {
                    bidder: `@${faker.name.findName()}`,
                    bidder_avatar: `${faker.image.avatar()}`,
                    bid_date: `${faker.date.recent()}`,
                    bid_amount: 3700,
                    bid_interest: 11.5
                }, {
                    bidder: `@${faker.name.findName()}`,
                    bidder_avatar: `${faker.image.avatar()}`,
                    bid_date: `${faker.date.recent()}`,
                    bid_amount: 2300,
                    bid_interest: 8
                }, {
                    bidder: `@${faker.name.findName()}`,
                    bidder_avatar: `${faker.image.avatar()}`,
                    bid_date: `${faker.date.recent()}`,
                    bid_amount: 150,
                    bid_interest: 11
                }
            ]
        }, {
            id: uuid.v4(),
            borrower_avatar: `${faker.image.avatar()}`,
            loan_amount: 9500,
            balance: 600,
            time_left: 160,
            loan_type: 'Payday loan',
            description: `${faker.lorem.paragraph()}`,
            loan_interest: 11.8,
            risk_level: 'text-success',
            risk_alert: 'hgreen',
            payment_period: 1,
            loan_progress: 70,
            bids: [
                {
                    bidder: `@${faker.name.findName()}`,
                    bidder_avatar: `${faker.image.avatar()}`,
                    bid_date: `${faker.date.recent()}`,
                    bid_amount: 8200,
                    bid_interest: 12.5
                }, {
                    bidder: `@${faker.name.findName()}`,
                    bidder_avatar: `${faker.image.avatar()}`,
                    bid_date: `${faker.date.recent()}`,
                    bid_amount: 6000,
                    bid_interest: 13
                }, {
                    bidder: `@${faker.name.findName()}`,
                    bidder_avatar: `${faker.image.avatar()}`,
                    bid_date: `${faker.date.recent()}`,
                    bid_amount: 340,
                    bid_interest: 10
                }
            ]
        }, {
            id: uuid.v4(),
            borrower_avatar: `${faker.image.avatar()}`,
            loan_amount: 120000,
            balance: 7600,
            time_left: 90,
            loan_type: 'Payday loan',
            description: `${faker.lorem.paragraph()}`,
            loan_interest: 11.8,
            risk_level: 'text-warning',
            risk_alert: 'hwarning',
            payment_period: 1,
            loan_progress: 10,
            bids: [
                {
                    bidder: `@${faker.name.findName()}`,
                    bidder_avatar: `${faker.image.avatar()}`,
                    bid_date: `${faker.date.recent()}`,
                    bid_amount: 8200,
                    bid_interest: 12.5
                }, {
                    bidder: `@${faker.name.findName()}`,
                    bidder_avatar: `${faker.image.avatar()}`,
                    bid_date: `${faker.date.recent()}`,
                    bid_amount: 6000,
                    bid_interest: 13
                }, {
                    bidder: `@${faker.name.findName()}`,
                    bidder_avatar: `${faker.image.avatar()}`,
                    bid_date: `${faker.date.recent()}`,
                    bid_amount: 340,
                    bid_interest: 10
                }
            ]
        }, {
            id: uuid.v4(),
            borrower_avatar: `${faker.image.avatar()}`,
            loan_amount: '98,527.00',
            balance: 600,
            time_left: 63,
            loan_type: 'Payday loan',
            description: `${faker.lorem.paragraph()}`,
            loan_interest: 11.8,
            risk_level: 'text-success',
            risk_alert: 'hgreen',
            payment_period: 1,
            loan_progress: 20,
            bids: [
                {
                    bidder: `@${faker.name.findName()}`,
                    bidder_avatar: `${faker.image.avatar()}`,
                    bid_date: '14.09.2016',
                    bid_amount: 1100,
                    bid_interest: 12.5
                }, {
                    bidder: `@${faker.name.findName()}`,
                    bidder_avatar: `${faker.image.avatar()}`,
                    bid_date: `${faker.date.recent()}`,
                    bid_amount: 900,
                    bid_interest: 9.8
                }, {
                    bidder: `@${faker.name.findName()}`,
                    bidder_avatar: `${faker.image.avatar()}`,
                    bid_date: `${faker.date.recent()}`,
                    bid_amount: 910,
                    bid_interest: 11
                }
            ]
        }
    ],
    fetching: false,
    fetch: false,
    error: null
})

const indexOfLoan = (state, nodeName, nodeId) => {
    return state
        .get(nodeName)
        .findIndex(loan => {
            return loan.get('id') === nodeId
        })

}

export default function loanBids(state = initialState, action) {
    switch (action.type) {
        case "FETCH_LOAN":
            {
                return state
            }
        case "FETCH_LOAN_REJECTED":
            {
                return state
            }
        case "FETCH_LOAN_FULFILLED":
            {
                state.set('fetch', true)
                return state
            }
        case "ADD_LOAN":
            {
                const index = indexOfLoan(state, 'loans', action.payload.loan.id)
                const count = state.getIn(['loans', index, 'bids']).count()
                state = state.setIn([
                    'loans', index, 'bids', count
                ], action.payload.bid)
                console.log(state.toJS())
                console.log('total', count)
                return state;

            }
        default:
            return state
    }
   
}
