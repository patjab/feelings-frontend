const feelingsApp = angular.module('feelingsApp', ['ngRoute'])

feelingsApp.controller('showAll', ['$scope', '$http', function($scope, $http) {
  $http.get('http://localhost:3000/api/v1/cohorts')
  .then(console.log)
}])

feelingsApp.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './templates/all.html',
    controller: 'showAll'
  })
})
