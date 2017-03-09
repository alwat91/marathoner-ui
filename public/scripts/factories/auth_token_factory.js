function AuthTokenFactory($window) {
  // retrieve local storage
  var store = $window.localStorage;

  var key = 'auth-token';
// return the results of the two functions
  return {
    getToken: getToken,
    setToken: setToken
  }
 // retrieve the auth token from storage
  function getToken(){
    return store.getItem(key);
  }
  // if a token is passed, set the token equal to the token passed. Otherwise, remove the token.
  function setToken(token){
    if (token){
      store.setItem(key, token);
    }
    else{
      store.removeItem(key);
    }
  }

}
