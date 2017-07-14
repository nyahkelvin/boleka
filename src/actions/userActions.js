
export function fetchUser() {
  return {
    type: "FETCH_USER_FULFILLED",
    payload: {
      id: 1,
      username: 'kelvinashu@gmail.com',
      password: '12345'
    }
  }
}

export function login(isLoggedIn) {
  return {
    type: "LOGIN",
    payload: {
      isLoggedIn: isLoggedIn
    }
  }
}

export function logout(isLoggedIn){
  return {
    type: "LOGOUT",
    payload: {
      isLoggedIn: isLoggedIn
    }
  }
}

export function redirectTo(redirectURL) {
  return {
    type: "SET_REDIRECT_URL",
    payload: {
      url: redirectURL
    }
  }
}

