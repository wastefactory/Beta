describe( 'Controller: mainController', function() {

  var mainController, $scope, MainService, $q;

  beforeEach( module( 'app' ) );

  beforeEach( inject( function( $controller, $rootScope, _MainService_, _$q_ ) {
    $scope = $rootScope.$new();
    MainService = _MainService_;
    $q = _$q_;
    deferred = $q.defer();
    mainController = $controller( 'mainController', {$scope: $scope, MainService: MainService});

    spyOn(MainService, "getCity").and.returnValue(deferred.promise);
    spyOn(MainService, "getWeather").and.returnValue(deferred.promise);
    spyOn(MainService, "generateIcon").and.returnValue('wi-day-sunny');
  }));

  it('should be the mainController', inject( function() {
    expect( mainController ).toBeTruthy();
  }));

  describe('#init', function() {
    it('should getCurrentPosition', function () {
      expect( navigator.geolocation ).toBeDefined();
    });
  });

  describe('#getLocation', function() {
    var postData = {
        key: '69064eda2d85390c651ee175825f2a5e',
        latitude: '1.29',
        longitude: '103.85',
        city: 'Singapore'
    };

    var icons = [1, 'Clouds'];

    it('should have getWeather', function() {
      expect(MainService.getWeather).toBeDefined();
    });

    it('should have getCity', function() {
      expect(MainService.getCity).toBeDefined();
    });

    it('should have generateIcon', function() {
      expect(MainService.generateIcon).toBeDefined();
    });

    it('should get the user location', function() {
      MainService.getCity(postData); // get user location
      expect(MainService.getCity).toHaveBeenCalledWith(postData);
    });

    it('should get the weather of the user based on the location', function () {
      MainService.getWeather(postData); // get weather information based on location
      expect(MainService.getWeather).toHaveBeenCalledWith(postData);
    });

    it('should get the icon', function () {
      MainService.generateIcon(icons);
      expect(MainService.generateIcon).toHaveBeenCalledWith(icons);
    });
  });

});
