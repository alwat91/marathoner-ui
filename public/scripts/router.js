angular.module('marathonerApp', ['ui.router'])
  .config(MarathonerRouter);

function MarathonerRouter($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('runs', {
      url: '/runs',
      templateUrl: '/partials/runs.html'
    })
    .state('edit_run', {
      url: '/edit_run',
      templateUrl: '/partials/edit_run.html'
    })
    .state('new_run', {
      url: '/new_run',
      templateUrl: '/partials/new_run.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/partials/login.html'
    })
    .state('sign_up', {
      url: '/sign_up',
      templateUrl: '/partials/sign_up.html'
    })

}
