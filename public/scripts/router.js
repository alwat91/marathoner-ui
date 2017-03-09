angular.module('marathonerApp', ['ui.router'])
  .config(MarathonerRouter)
  .config(authInterceptor);

  function authInterceptor($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor')
  }

function MarathonerRouter($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: '/partials/home.html'
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
    .state('about', {
      url: '/about',
      templateUrl: '/partials/about.html'
    })

}
