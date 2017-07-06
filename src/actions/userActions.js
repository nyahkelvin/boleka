export function fetchUser(){
  return {
    type: "FETCH_USER_FULFILLED",
    payload: {
      id: 1,
      username: 'kelvinashu@gmail.com',
      password: '12345'
    }
  }
}
