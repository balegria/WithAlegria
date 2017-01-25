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
      templateUrl: "components/home/home.html", 
      controller: "PageCtrl"
    })
    .when("/about", {
      title: "About",
      templateUrl: "components/about/about.html", 
      controller: "PageCtrl"
    })
    .when("/diy", {
      title: "DIY",
      templateUrl: "components/posts/posts.html", 
      controller: "BlogCtrl"
    })
    .when("/travel", {
      title: "Travel",
      templateUrl: "components/posts/posts.html", 
      controller: "BlogCtrl"
    })
    .when("/living", {
      title: "Living",
      templateUrl: "components/posts/posts.html", 
      controller: "BlogCtrl"
    })
    .when("/recipes", {
      title: "Recipes",
      templateUrl: "components/posts/posts.html", 
      controller: "BlogCtrl"
    })
    .otherwise("/", {
      templateUrl: "components/home/home.html",    
      controller: "PageCtrl"    
    });
}]);


/**
* MainCtrl
*/
app.controller('MainCtrl', function($scope, $route) {
  function initScope(){
    $scope.headerTitle = $route.current.title;
    topic = $route.current.title;
  }

  
  $scope.$on('$routeChangeSuccess', initScope)
});




