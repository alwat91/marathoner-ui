function RunsController($http, $state, $scope){
  var self = this;
    var server = 'http://localhost:3000';

  function getRuns(){
    $http.get(`${server}/users/${$scope.currentUser.id}/runs`)
      .then(function(res){
          self.allRuns = res.data.runs
      })
  }
  self.getRuns = getRuns;
  getRuns();
}
