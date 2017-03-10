function AuthController($http, $state, $scope, $rootScope, AuthTokenFactory) {
  var self = this;
  var server = 'https://boiling-escarpment-86244.herokuapp.com';

  function signup(user) {
    console.log(user);
    $http.post(`${server}/users`, { user: user })
    .then(function(res){
      self.login(user);
    })
  }
  self.signup = signup;

  function login(user) {
    $http.post(`${server}/users/login`, { user: user })
    .then(function(res){
      AuthTokenFactory.setToken(res.data.token);

      $scope.$emit('userLoggedIn', res.data.user);
      $state.go('index');
    })
  }
  self.login = login;

  function logout() {
    $scope.$emit('userLoggedOut');
    $state.go('index');
  }
  self.logout = logout;

}
