(function () {
  'use strict';
  angular
    .module('posts')
    .controller('postsController', ['$scope', '$location', '$routeParams', 'postsService', function ($scope, $location, $routeParams, postsService) {

      postsService.getPosts().success(function (posts) {
        $scope.posts = posts;
      });
      postsService.getPost($routeParams.id).success(function (post) {
        $scope.post = post;
      });

      $scope.createPost = function (newPost) {
        postsService.create(newPost);
        $location.path('/posts');
      };
      $scope.updatePost = function (post) {
        postsService.update(post);
        $location.path('/posts/' + post._id);
      };
      $scope.deletePost = function (id) {
        postsService.delete(id);
        $location.path('/posts');
      };

      $scope.$on('post:created', function () {
        postsService.getPosts().success(function (posts) {
          $scope.posts = posts;
        });
      });

      $scope.$on('post:updated', function () {
        postsService.getPost($routeParams.id).success(function (post) {
          $scope.post = post;
        });
      });


    }]);

})();
