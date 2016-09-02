var app = angular.module('nomad', ['ngResource']);

app.factory('nasaData', function ($resource) {
  var key = 'IRhGAGSwYdv0y2WC77sm5XzuukTv93LkPCfRILcD';
	return $resource("https://api.nasa.gov/planetary/apod?api_key=" + key);
});

app.service('nasaService', function(nasaData){
  var self = {
    'apod': {},
    'date': '',
    'responseCode': '',
    'isLoading': false,
    'loadData': function(){
      if (!self.isLoading) {
        self.isLoading = true;
        var params = {
          'date': self.date,
        };
        return nasaData.get(params, function(data){
          self.apod = data;
        }).$promise.catch(function(response){
          switch (response.status) {
            case 400:
              self.responseCode = '400';
              break;
            case 500:
              self.responseCode = '500';
              break;
          }
          self.apod = data;
        });
      }
    }
  };
  return self;
});

app.filter('trustAsResourceUrl', ['$sce', function($sce) {
  return function(val) {
    return $sce.trustAsResourceUrl(val);
  };
}]);
