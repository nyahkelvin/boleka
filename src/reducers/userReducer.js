import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    user: {
        id: null,
        username: null,
        password: null
    },
    fetching: false,
    fetch: false,
    isLoggedIn: false,
    redirectURL: null,
    error: null
})

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_USER":
            {
                return {
                    ...state,
                    fetching: true
                }
            }
        case "FETCH_USER_REJECTED":
            {
                return {
                    ...state,
                    fetching: false,
                    error: action.payload
                }
            }
        case "FETCH_USER_FULFILLED":
            {
                return state
            }
        case "LOGIN":
            {
                return state.set('isLoggedIn', action.payload.isLoggedIn)
            }
        case "LOGOUT":
            {
                return state.set('isLoggedIn', action.payload.isLoggedIn)
            }
        default:
            return state
    }

}
