
import Immutable from 'immutable';


const initialState = Immutable.fromJS({
    loans: [],
    fetching: false,
    fetch: false,
    error: null
})

const indexOfLoan = (state, nodeName, nodeId) => {
    return state
        .get(nodeName)
        .findIndex(loan => {
            console.log('loan in index ', nodeId)
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
                return state.setIn(['error'], Immutable.fromJS(action.payload.error))
            }
        case "FETCH_LOAN_FULFILLED":
            {
                const newState = state.setIn(['loans'], Immutable.fromJS(action.payload.loans))
                return newState
            }
        case "ADD_BID":
            {
                const index = indexOfLoan(state, 'loans', action.payload.bid.loan_id)
                const count = state.getIn(['loans', index, 'bids']).count()
                return state.setIn([
                    'loans', index, 'bids', count
                ], action.payload.bid)

            }
        case "CONNECTED": {
            console.log('Socket Connected')
            return state
        }

        default:
            return state
    }

}
