function RunsController($http, $state, $scope){
  var self = this;
    var server = 'http://localhost:3000';

  function getRuns(){
    $http.get(`${server}/users/${$scope.currentUser.id}/runs`)
      .then(function(res){
          self.allRuns = res.data.runs

          self.allRuns.forEach(function(el){
            el.date = new Date(el.beginning_time).toDateString();

            el.beginning_time = new Date(el.beginning_time).toTimeString();
            el.end_time = new Date(el.end_time).toTimeString();
          })
      })
  }
  self.getRuns = getRuns;
  getRuns();
}
