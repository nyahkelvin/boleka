
import Immutable from 'immutable';


const initialState = Immutable.fromJS({
    loans: [],
    fetching: false,
    fetch: false,
    error: null
})

const indexOfLoan = (state, nodeName, nodeId) => {
    console.log('here is loan_id ', nodeId)
    return state
        .get(nodeName)
        .findIndex(loan => {
            
            return loan.get('loan_id') === nodeId
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
                return state.setIn(['loans'], Immutable.fromJS(action.payload.loans))

            }
        case "ADD_BID":
            {
                const index = indexOfLoan(state, 'loans', action.payload.bid.loan_id)
                const count = state.getIn(['loans', index, 'bids']).count()
                const newState = state.setIn([
                    'loans', index, 'bids', count
                ], action.payload.bid)

                console.log('Add bid foo ',newState.toJS())
                return newState

            }

        default:
            return state
    }

}
