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
        'background-position' : 'center',
        'height': '25vw',
        'width': '100%',
    });
  };
});
