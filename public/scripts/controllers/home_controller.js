function HomeController($scope, $http) {
  var self = this;

  $scope.$on('userLoggedIn', function(event, data){
    self.currentUser = data;
    $scope.currentUser = data;
  });

  $scope.$on('userLoggedOut', function(event, data){
    self.currentUser = null;
    $scope.currentUser = null;
  });

}
