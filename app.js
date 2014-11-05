(function () {
  "use strict";

  angular
    .module('darrenApp', ['ngRoute', 'posts'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: "common/views/main.html",
          controller: "mainController"
        })
        .when('/404', {
          templateUrl: "common/views/404.html",
          controller: "mainController"
        })
        .otherwise({
          redirectTo: "/404"
        });


    });

})();
