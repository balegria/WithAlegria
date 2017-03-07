'user strict';



app.controller('PageCtrl', ['$scope', '$http', '$resource', 
  function ($scope, $http, $resource) {
    console.log("Page Controller reporting for duty...");
    
    if (topic == "With Alegria"){    
      var userFeed = new Instafeed({
            get: 'user',
            userId: '176659272',
            accessToken: '4483004649.ba4c844.be8c9996027d45b1ab46b078fd6abb9d',
            limit: 3,
            resolution: 'low_resolution',
            template: '<div class="insta-img"><a href="{{link}}"><img src="{{image}}"/></a></div>'
      });
      userFeed.run();
    }

    var url = '/getLastThreePosts';
    var lastThreePosts = $resource(url);

    lastThreePosts.query(function(response) {
      $scope.postCollections = response;
    });

}]);