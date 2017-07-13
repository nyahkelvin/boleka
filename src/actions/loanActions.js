export function fetchLoans() {
  return {type: "FETCH_LOAN_FULFILLED", payload: 'Payload data'}
}

export function addBid(loan, bid) {
  return {
    type: "ADD_LOAN",
    payload: {
      'bid': bid,
      'loan': loan
    }
  }
}
