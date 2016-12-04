'use strict';

app.controller('mainController', ['$scope','MainService', function($scope, MainService) {
  $scope.date = new Date();
  var postData = {
      key: '69064eda2d85390c651ee175825f2a5e', //openweathermap api key
      latitude: '',
      longitude: '',
      city: ''
  };

  init();

	function init(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getLocation);
    }
    else {
        $scope.message = "Geolocation is not supported by this browser.";
    }
	};

  function getLocation(position){
    postData.latitude = position.coords.latitude;
    postData.longitude = position.coords.longitude;

    MainService.getCity(postData).then(function(city){
      return city;
    }).then(function(city){
      postData.city = city;

      return MainService.getWeather(postData).then(function (response) {
          response.weather[0].flat_icon = MainService.generateIcon( $scope.date.getHours(), response.weather[0].main );
          $scope.city = response;
      });
    });
  }

}]);
