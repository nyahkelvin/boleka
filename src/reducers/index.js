import { combineReducers } from 'redux-immutable'

import loanReducer from './loanReducer'
import userReducer from './userReducer'

export default combineReducers({
  loans: loanReducer,
  user: userReducer
})
