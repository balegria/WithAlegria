'use strict';

/**
 * Controls the Blog
 */

app.controller('BlogCtrl', ['$scope', '$route', '$http', '$routeParams', '$resource',
	function ($scope, $route, $http, $routeParams, $resource) {
		console.log("Blog Controller reporting for duty.");

		var postType = $route.current.title;

		var url = '/getPosts/' + postType;

		var posts = $resource(url);

		posts.query(function(response) {
		  $scope.posts = response;
		});

}]);