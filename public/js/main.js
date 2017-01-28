'user strict';

var app = angular.module('withAlegria', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {
      title: "With Alegria",
      templateUrl: "views/home.html", 
      controller: "PageCtrl"
    })
    .when("/about", {
      title: "About",
      templateUrl: "views/about.html", 
      controller: "PageCtrl"
    })
    .when("/diy", {
      title: "DIY",
      templateUrl: "views/posts.html", 
      controller: "BlogCtrl"
    })
    .when("/travel", {
      title: "Travel",
      templateUrl: "views/posts.html", 
      controller: "BlogCtrl"
    })
    .when("/living", {
      title: "Living",
      templateUrl: "views/posts.html", 
      controller: "BlogCtrl"
    })
    .when("/recipes", {
      title: "Recipes",
      templateUrl: "views/posts.html", 
      controller: "BlogCtrl"
    })
    .when("/addPost", {
      title: "Add Post",
      templateUrl: "views/addPost.html",
      controller: "AddPost"
    })
    .otherwise("/", {
      templateUrl: "views/home.html",    
      controller: "PageCtrl"    
    });
}]);


/**
* MainCtrl
*/
app.controller('MainCtrl', function($scope, $route) {

  // console.log(postsCollection);

  function initScope(){
    $scope.headerTitle = $route.current.title;
    topic = $route.current.title;
  }

  
  $scope.$on('$routeChangeSuccess', initScope)
});




