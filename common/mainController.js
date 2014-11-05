(function () {
  "use strict";

  angular.module('darrenApp')
    .controller('mainController', ['$scope', function ($scope) {

      $scope.mainPage = [{name: "calvin", age: 34}, {name: "darren", age: 33}, {name: "collin", age: 1}, {name: "luca", age: 2}];

      $scope.notFound = "You need to check your eyes because shit went wrong";


    }]);

})();
