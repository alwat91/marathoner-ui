function RunsController($http, $state, $scope){
  var self = this;
    var server = 'http://localhost:3000';

  function getRuns(){
    $http.get(`${server}/users/${$scope.currentUser.id}/runs`)
      .then(function(res){
          self.allRuns = res.data.runs
          parseRuns()
          })
  }
  self.getRuns = getRuns;
  getRuns();

  function editRun(run){
    run = reqHelper(run);

    $http.put(`${server}/users/${$scope.currentUser.id}/runs/${run.id}`, run)
      .then(function(res){
        console.log(res);
      })
  }
  self.editRun = editRun;

  function deleteRun(run){
    $http.delete(`${server}/users/${$scope.currentUser.id}/runs/${run.id}`)
    .then(function(res){
      $state.reload();
    })
  }
  self.deleteRun = deleteRun;

  function createRun(run){
    run = reqHelper(run);
    $http.post(`${server}/users/${$scope.currentUser.id}/runs`, run)
      .then(function(res){
        self.allRuns = res.data.runs;
        parseRuns();
        $state.go('index');
      })
  }
  self.createRun = createRun;

  function parseRuns(){
    self.allRuns.forEach(function(el){
      el.date = new Date(el.beginning_time)

      el.beginning_time = new Date(el.beginning_time)
      el.end_time = new Date(el.end_time)
    })
  }

  function reqHelper(run){
    run.beginning_time.setFullYear(run.date.getFullYear());
    run.beginning_time.setDate(run.date.getDate());
    run.beginning_time.setMonth(run.date.getMonth());

    run.end_time.setFullYear(run.date.getFullYear());
    run.end_time.setDate(run.date.getDate());
    run.end_time.setMonth(run.date.getMonth());
    return run;
  }

  function goEdit(run){
    $scope.$emit('editingRun', run);
    $state.go('edit_run');
  }
  self.goEdit = goEdit;
}
