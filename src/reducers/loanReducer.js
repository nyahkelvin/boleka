import uuid from 'uuid'

import a1 from '../images/a1.jpg'
import a2 from '../images/a2.jpg'
import a3 from '../images/a3.jpg'
import a4 from '../images/a4.jpg'
import a5 from '../images/a5.jpg'
import a6 from '../images/a6.jpg'

const initialState = {
    loans: [
        {
            id: uuid.v4(),
            borrower_avatar: `${a5}`,
            loan_amount: 6800,
            balance: 600,
            time_left: 12,
            loan_type: 'Payday loan',
            description: 'It is a long established fact that a reader will be distracted by the readable c' +
                    'ontent of a page when looking at its layout. The point of using Lorem Ipsum is t' +
                    'hat it has...',
            loan_interest: 11.8,
            risk_level: 'text-success',
            risk_alert: 'hgreen',
            payment_period: 8,
            loan_progress: 100,
            bids: [
                {
                    bidder: '@batmanTrader',
                    bidder_avatar: `${a4}`,
                    bid_date: '21.07.2015',
                    bid_amount: 8200,
                    bid_interest: 12.5
                }, {
                    bidder: '@invtGuru',
                    bidder_avatar: `${a6}`,
                    bid_date: '21.07.2017',
                    bid_amount: 6000,
                    bid_interest: 13
                }, {
                    bidder: '@banknotes97',
                    bidder_avatar: `${a2}`,
                    bid_date: '06.07.2017',
                    bid_amount: 340,
                    bid_interest: 10
                }
            ]
        }, {
            id: uuid.v4(),
            borrower_avatar: `${a5}`,
            loan_amount: 9500,
            balance: 600,
            time_left: 12,
            loan_type: 'Payday loan',
            description: 'It is a long established fact that a reader will be distracted by the readable c' +
                    'ontent of a page when looking at its layout. The point of using Lorem Ipsum is t' +
                    'hat it has...',
            loan_interest: 11.8,
            risk_level: 'text-success',
            risk_alert: 'hgreen',
            payment_period: 1,
            loan_progress: 70,
            bids: [
                {
                    bidder: '@batmanTrader',
                    bidder_avatar: `${a1}`,
                    bid_date: '21.07.2015',
                    bid_amount: 8200,
                    bid_interest: 12.5
                }, {
                    bidder: '@invtGuru',
                    bidder_avatar: `${a3}`,
                    bid_date: '21.07.2015',
                    bid_amount: 6000,
                    bid_interest: 13
                }, {
                    bidder: '@banknotes97',
                    bidder_avatar: `${a2}`,
                    bid_date: '06.07.2017',
                    bid_amount: 340,
                    bid_interest: 10
                }
            ]
        }, {
            id: uuid.v4(),
            borrower_avatar: `${a5}`,
            loan_amount: 120000,
            balance: 7600,
            time_left: 12,
            loan_type: 'Payday loan',
            description: 'It is a long established fact that a reader will be distracted by the readable c' +
                    'ontent of a page when looking at its layout. The point of using Lorem Ipsum is t' +
                    'hat it has...',
            loan_interest: 11.8,
            risk_level: 'text-success',
            risk_alert: 'hwarning',
            payment_period: 1,
            loan_progress: 10,
            bids: [
                {
                    bidder: '@batmanTrader',
                    bidder_avatar: `${a1}`,
                    bid_date: '21.07.2015',
                    bid_amount: 8200,
                    bid_interest: 12.5
                }, {
                    bidder: '@invtGuru',
                    bidder_avatar: `${a3}`,
                    bid_date: '21.07.2015',
                    bid_amount: 6000,
                    bid_interest: 13
                }, {
                    bidder: '@banknotes97',
                    bidder_avatar: `${a4}`,
                    bid_date: '06.07.2017',
                    bid_amount: 340,
                    bid_interest: 10
                }
            ]
        }, {
            id: uuid.v4(),
            borrower_avatar: `${a5}`,
            loan_amount: '98,527.00',
            balance: 600,
            time_left: 3,
            loan_type: 'Payday loan',
            description: 'It is a long established fact that a reader will be distracted by the readable c' +
                    'ontent of a page when looking at its layout. The point of using Lorem Ipsum is t' +
                    'hat it has...',
            loan_interest: 11.8,
            risk_level: 'text-success',
            risk_alert: 'hgreen',
            payment_period: 1,
            loan_progress: 20,
            bids: [
                {
                    bidder: '@batmanTrader',
                    bidder_avatar: `${a1}`,
                    bid_date: '14.09.2016',
                    bid_amount: 1100,
                    bid_interest: 12.5
                }, {
                    bidder: '@invtGuru',
                    bidder_avatar: `${a3}`,
                    bid_date: '21.07.2015',
                    bid_amount: 900,
                    bid_interest: 9.8
                }, {
                    bidder: '@banknotes97',
                    bidder_avatar: `${a6}`,
                    bid_date: '06.07.2017',
                    bid_amount: 910,
                    bid_interest: 11
                }
            ]
        }
    ],
    fetching: false,
    fetch: false,
    error: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_LOAN":
            {
                return {
                    ...state,
                    fetching: true
                }
            }
        case "FETCH_LOAN_REJECTED":
            {
                return {
                    ...state,
                    fetching: false,
                    error: action.payload
                }
            }
        case "FETCH_LOAN_FULFILLED":
            {
                return {
                    ...state,
                    fetching: false,
                    fetched: true

                }
            }
        case "ADD_LOAN":
            {
                return {
                    ...state,
                    fetched: true
                }
            }
        default:
            {}
    }
    return state
}