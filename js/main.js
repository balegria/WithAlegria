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
      templateUrl: "partials/home.html", 
      controller: "PageCtrl"
    })
    .when("/about", {
      title: "About",
      templateUrl: "partials/about.html", 
      controller: "PageCtrl"
    })
    .when("/diy", {
      title: "DIY",
      templateUrl: "partials/posts.html", 
      controller: "BlogCtrl"
    })
    .when("/travel", {
      title: "Travel",
      templateUrl: "partials/posts.html", 
      controller: "BlogCtrl"
    })
    .when("/living", {
      title: "Living",
      templateUrl: "partials/posts.html", 
      controller: "BlogCtrl"
    })
    .when("/recipes", {
      title: "Recipes",
      templateUrl: "partials/posts.html", 
      controller: "BlogCtrl"
    })
    .otherwise("/", {
      templateUrl: "partials/home.html", 
      controller: "PageCtrl"
    });
}]);

// app.run(['$rootScope', '$route', function($rootScope, $route) {
//     $rootScope.$on('$routeChangeSuccess', function() {
//         document.title = $route.current.title;
//         // $route.reload();
//     });
    
// }]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function ($scope, $location, $route, $http) {
  console.log("Blog Controller reporting for duty.");
  var topic = $route.current.title;

  function initScope(){
    $scope.headerTitle = $route.current.title;
    topic = $route.current.title;
  }
  
  $scope.$on('$routeChangeSuccess', initScope)

  // $scope.message = "Hello";
  // console.log("topic here is " + topic);

  if (topic == "Living"){
    $http.get('data/livingPosts.json').success(function(data){
      $scope.posts = data;
    });
  } else if (topic == "Travel"){
    $http.get('data/travelPosts.json').success(function(data){
      $scope.posts = data;
    });
  } else if (topic == "DIY"){
    $http.get('data/diyPosts.json').success(function(data){
      $scope.posts = data;
    });
  } else if (topic == "Recipes"){
    $http.get('data/recipesPosts.json').success(function(data){
      $scope.posts = data;
    });
  }

});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function ($scope, $route) {
  console.log("Page Controller reporting for duty...");
  function initScope(){
    $scope.headerTitle = $route.current.title;
  }
  
  $scope.$on('$routeChangeSuccess', initScope)
});