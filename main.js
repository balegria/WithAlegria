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

// /**
//  * Controls the Blog
//  */
// app.controller('BlogCtrl', function ($scope, $location, $route, $http) {
//   console.log("Blog Controller reporting for duty.");

//   if (topic == "Living"){
//     $http.get('data/livingPosts.json').success(function(data){
//       $scope.posts = data;
//     });
//   } else if (topic == "Travel"){
//     $http.get('data/travelPosts.json').success(function(data){
//       $scope.posts = data;
//     });
//   } else if (topic == "DIY"){
//     $http.get('data/diyPosts.json').success(function(data){
//       $scope.posts = data;
//     });
//   } else if (topic == "Recipes"){
//     $http.get('data/recipesPosts.json').success(function(data){
//       $scope.posts = data;
//     });
//   }

// });

/**
 * Controls all other Pages
 */
// app.controller('PageCtrl', function ($scope, $route) {
//   console.log("Page Controller reporting for duty...");
//   // $scope.$on('$routeChangeSuccess', initScope)
  
//   if (topic == "With Alegria"){    
//     var userFeed = new Instafeed({
//           get: 'user',
//           userId: '176659272',
//           accessToken: '4483004649.ba4c844.be8c9996027d45b1ab46b078fd6abb9d',
//           // only show the last three images
//           limit: 3,
//           resolution: 'low_resolution'
//           // template: '<a class="insta-image" href="{{link}}"><img src="{{image}}" /></a>'
//     });
//     userFeed.run();
//   }

// });




