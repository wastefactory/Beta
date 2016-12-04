'use strict';

app.factory('MainService', function(DataService) {

	var factory = {};

	factory.getCity = function(postData) {
    return DataService.getCity(postData).then(function (response) {
        return response.results[7].formatted_address;
    });
	}

	factory.getWeather = function(postData) {
    return DataService.getWeather(postData).then(function (response) {
        return response;
    });
	}

  factory.generateIcon = function(time, weather){
    var icon;
    var timeOfDay = (time > 6 && time < 20) ? 'dayTime' : 'nightTime';

    if(timeOfDay == 'dayTime'){
      switch ( weather ) {
          case 'Clear':
              icon = "wi-day-sunny";
              break;
          case 'Clouds':
              icon = "wi-day-cloudy";
              break;
          case 'Drizzle':
              icon = "wi-day-showers";
              break;
          case 'Rain':
              icon = "wi-day-rain";
              break;
          case 'Extreme':
          case 'Additional':
          case 'Thunderstorm':
              icon = "wi-day-thunderstorm";
              break;
          case 'Snow':
              icon = "wi-day-snow";
              break;
          case 'Mist':
          case 'Smoke':
          case 'Haze':
          case 'Sand, Dust whirls':
          case 'Fog':
          case 'Sand':
          case 'Dust':
          case 'Vocanic ash':
          case 'Squalls':
          case 'Tornado':
          case 'Atmosphere':
              icon = "wi-day-fog";
              break;
      }
    }else{
      switch ( weather ) {
          case 'Clear':
              icon = "wi-night-clear";
              break;
          case 'Clouds':
              icon = "wi-night-alt-cloudy";
              break;
          case 'Drizzle':
              icon = "wi-night-alt-showers";
              break;
          case 'Rain':
              icon = "wi-night-alt-rain";
              break;
          case 'Extreme':
          case 'Additional':
          case 'Thunderstorm':
              icon = "wi-night-alt-thunderstorm";
              break;
          case 'Snow':
              icon = "wi-night-alt-snow";
              break;
          case 'Mist':
          case 'Smoke':
          case 'Haze':
          case 'Sand, Dust whirls':
          case 'Fog':
          case 'Sand':
          case 'Dust':
          case 'Vocanic ash':
          case 'Squalls':
          case 'Tornado':
          case 'Atmosphere':
              icon = "wi-night-fog";
              break;
      }
    }

    return icon;
  }

	return factory;
});
