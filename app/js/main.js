var app = angular.module('nomad', ['ngResource']);

app.factory('nasaData', function ($resource) {
  var key = 'IRhGAGSwYdv0y2WC77sm5XzuukTv93LkPCfRILcD';
	return $resource("https://api.nasa.gov/planetary/apod?api_key=" + key);
});

app.service('nasaService', function(nasaData){
  var self = {
    'apod': {},
    'date': '',
    'isLoading': false,
    'loadData': function(){
      if (!self.isLoading) {
        self.isLoading = true;
        var params = {
          'date': self.date,
        };
        return nasaData.get(params, function(data){
          self.apod = data;
          return data;
        }).$promise;
      }
    }
  };
  return self;
});

app.directive('spinner', function(){
  return {
    'restrict': 'E',
    'templateUrl': '../templates/spinner.html',
    'scope': {
			'isLoading': '=',
			'message': '@'
		}
  };
});

app.directive('backImg', function(){
  return function(scope, element, attrs){
    var url = attrs.backImg;
    element.css({
        'background-image': 'url(' + url +')',
        'background-size' : 'cover',
         
        'height': '100vh',
        'width': '100%',
    });
  };
});
