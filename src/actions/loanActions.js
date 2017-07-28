import axios from 'axios'

const BaseURL = "http://localhost:8080/"

export function fetchLoans() {
  const request = axios.get(BaseURL)
  return (dispatch) => {
    request.then( ({data}) => {
      dispatch({type: "FETCH_LOAN_FULFILLED", payload: {'loans': data} })
    })
  }

  //return {type: "FETCH_LOAN_FULFILLED", payload: 'Payload data'}
}

export function addBid(loan, bid) {
  const request = axios.post(`${BaseURL}`)
  return {
    type: "ADD_BID",
    payload: {
      'bid': bid,
      'loan': loan
    }
  }
}


