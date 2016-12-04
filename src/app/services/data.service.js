'use strict';

app.factory('DataService', ['$http', function($http) {
    var DataService = {};
    var openweathermap = 'http://api.openweathermap.org/data/2.5/weather';

    DataService.getCity = function (postData) {
        var geocodingURL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + postData.latitude + '%2C' + postData.longitude + '&language=en';

        return $http.get(geocodingURL).then(function(response){
          return response.data;
        });
    };

    DataService.getWeather = function (postData) {
      var url = openweathermap +'?q='+postData.city+'&units=metric&APPID='+postData.key;

      return $http.get(url).then(function(response){
        return response.data;
      });
    };

    return DataService;
}]);
