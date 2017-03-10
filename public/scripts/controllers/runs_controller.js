function RunsController($http, $state, $scope){
  var self = this;
  var server = 'https://boiling-escarpment-86244.herokuapp.com';

  function getRuns(){
    $http.get(`${server}/users/${$scope.currentUser.id}/runs`)
      .then(function(res){
          self.allRuns = res.data.runs
          parseRuns();
          buildChart();
          })
  }
  self.getRuns = getRuns;
  getRuns();

  function editRun(run){
    run = reqHelper(run);

    $http.put(`${server}/users/${$scope.currentUser.id}/runs/${run.id}`, run)
      .then(function(res){
        self.allRuns = res.data.runs;
        $state.go('index');
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
        buildChart();
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
    run.date = new Date(run.beginning_time)

    run.beginning_time = new Date(run.beginning_time)
    run.end_time = new Date(run.end_time)


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

  function now(){
    return new Date();
  }
  self.now = now;

  function buildChart(){
    var ctx = $("#myChart");
    var mileageData = [];
    var dates = [];

    self.allRuns.forEach(function(run){
      mileageData.push(run.mileage);
      dates.push(`${run.beginning_time.getMonth()}/${run.beginning_time.getDate()}`);
    })

      var data = {
      labels: dates,
      datasets: [{
              label: "Latest Runs",
              data: mileageData,
              backgroundColor: "rgba(14, 151, 225, 0.4)",
              borderColor: "rgb(58, 163, 211)",
              pointBackgroundColor: "#fff",
              pointBorderColor: "rgba(75,192,192,1)"
              }]
      };

    var runsChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Mileage'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Date of Run'
            }
          }]
        }
      }
    });
  }
}
