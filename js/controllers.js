angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})



.controller('ListaCtrl',function($scope,$http,$state){
  $http.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLvM3GnVT0LjZkRgW7jHIxZpSppuwzmUZy&maxResults=40&key=AIzaSyDhDZjburmzpaoH39Uj4dnU6X_GRLbCVW0').then(function(resp) {
    console.log('Success', resp);
  $scope.items = resp.data.items;
           
    $scope.playvideo = function(id,title){
        $state.go('now-playing',{id:id,title:title});
       //SocialShare function
        
    }
   // console.log("VideoID: " + id);
    
        // For JSON responses, resp.data contains the result
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
        //PLueTNPnrNvSHjlZcJb4-Yt6LXUwa53M_p - Sami Yusuf
        //PL97C2D4AAC980FDD7 Ilahi
  })
})



.controller('phim1',function($scope,$http,$state){
  $http.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLbLLUY02QH6ga_iZ8dzbD3pYXMjFYya2b&maxResults=40&key=AIzaSyDhDZjburmzpaoH39Uj4dnU6X_GRLbCVW0').then(function(resp) {
    console.log('Success', resp);
  $scope.items = resp.data.items;
           
    $scope.playvideo = function(id,title){
        $state.go('now-playing',{id:id,title:title});
       //SocialShare function
        
    }
   // console.log("VideoID: " + id);
    
        // For JSON responses, resp.data contains the result
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
        //PLueTNPnrNvSHjlZcJb4-Yt6LXUwa53M_p - Sami Yusuf
        //PL97C2D4AAC980FDD7 Ilahi
  })
})


.controller('nowPlayingCtrl',function ($scope, $http, $stateParams){
    $scope.videoId = $stateParams.id;
    $scope.videoTitle = $stateParams.title;
    console.log('videoID: '+ $scope.videoId);
    
    document.getElementById("video-player").innerHTML = '<iframe src="http://www.youtube.com/embed/' + $scope.videoId + '" frameborder="0" allowfullscreen class="yt-playeri"></iframe>';
    document.getElementById("now-playing").innerHTML = $scope.videoTitle;
    
    $scope.shareAnywhere = function() {
    console.log("Shared: ID: " + $scope.videoId + " title: " + $scope.videoTitle);
    window.plugins.socialsharing.shareViaFacebook('Duke shikuar: ' + $scope.videoTitle + 'http://www.youtube.com/watch?v=' + $scope.videoId, null /* img */, null /* url */);
    //$cordovaSocialSharing.shareViaFacebook('Duke shikuar: ' , title, null, 'http://www.youtube.com/watch?v=' + id);
   }
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
