export function fetchLoans() {
  return {type: "FETCH_LOAN_FULFILLED", payload: 'Payload data'}
}

export function addBid(loanId, bid) {
  return {type: "ADD_LOAN", payload: bid}
}
