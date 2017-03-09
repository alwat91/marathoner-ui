function AuthController($http, $state, $scope, $rootScope, AuthTokenFactory) {
  var self = this;
  var server = 'https://boiling-escarpment-86244.herokuapp.com'

  function signup(user) {
    $http.post(`${server}/users`, { user: user} )
    .then(function(res){
      console.log
      $state.go('index');
    })
  }
  self.signup = signup

}
