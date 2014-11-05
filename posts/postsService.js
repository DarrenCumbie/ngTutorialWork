(function () {
  'use strict';
  angular
    .module('posts')
    .factory('postsService', function ($http, $rootScope) {

      var url = "http://tiy-fee-rest.herokuapp.com/collections/darren";

      var createPost = function (newPost) {
        $http.post(url, newPost).then(function (post) {
          $rootScope.$broadcast('post:created');
          console.log("post:create");
        });
      };
      var updatePost = function (post) {
        $http.put(url + '/' + post._id, post).then(function (post) {
          $rootScope.$broadcast('post:updated');
          console.log("post:updated");
        });
      };
      var deletePost = function (id) {
        $http.delete(url + '/' + id).then(function (res) {
          $rootScope.$broadcast('post:deleted');
          console.log("post:deleted");
        });
      };
      var getPosts = function () {
        return $http.get(url);
      };
      var getPost = function (id) {
        return $http.get(url + '/' + id);
      };

      return {
        create: createPost,
        update: updatePost,
        delete: deletePost,
        getPosts: getPosts,
        getPost: getPost

      };


    });
})();
