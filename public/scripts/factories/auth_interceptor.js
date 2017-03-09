function AuthInterceptor(AuthTokenFactory) {
  return {
    // Add token to the request header
    request: addToken
  }

  function addToken(config){
    // retrieve token
    var token = AuthTokenFactory.getToken()
    // if the token exists, add it to the request header
    if (token) {
      config.headers = config.headers || {}
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  }
}
