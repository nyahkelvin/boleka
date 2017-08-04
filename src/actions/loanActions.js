import axios from 'axios'

const BaseURL = "http://localhost:8080/"



export function fetchLoans() {
  const request = axios.get(BaseURL)
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: "FETCH_LOAN_FULFILLED", payload: { 'loans': data } })
    })
    .catch(err => {
      dispatch({type: "FETCH_LOAN_REJECTED", payload: {'error': err}})
    })
  }

  //return {type: "FETCH_LOAN_FULFILLED", payload: 'Payload data'}
}

export function addBid(loan, bid) {
  console.log('conent of bid ', bid)
  const request = axios.post(`${BaseURL}api/bid`, bid)

  return (dispatch) => {
    request.then(({ data }) => {
      dispatch(
        {
          type: "ADD_BID",
          payload: {
            'bid': bid,
            'loan': loan
          }
        }
      )
    })
  }
}


