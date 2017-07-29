import axios from 'axios'

const BaseURL = "http://localhost:8080/"

const config = {
  headers: { "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS" }
};

export function fetchLoans() {
  const request = axios.get(BaseURL)
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: "FETCH_LOAN_FULFILLED", payload: { 'loans': data } })
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

  // return {
  //   type: "ADD_BID",
  //   payload: {
  //     'bid': bid,
  //     'loan': loan
  //   }
  // }
}


