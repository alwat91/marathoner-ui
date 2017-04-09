angular.module('marathonerApp')
  .directive('runItem', runView);

function runView(){
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: '/partials/_runView.html',
    scope: {
      run: '='
    }
  }
}
