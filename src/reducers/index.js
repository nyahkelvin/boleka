import { combineReducers } from 'redux'

import loanReducer from './loanReducer'
import userReducer from './userReducer'

export default combineReducers({
  loans: loanReducer,
  user: userReducer
})
