app.controller('mainController', function($scope, $http){
  $scope.nasa = {};
  $scope.errorMsg = '';
  $scope.date = '';
  $scope.isError = false;
  var key = 'IRhGAGSwYdv0y2WC77sm5XzuukTv93LkPCfRILcD';

  $scope.onSubmit = function (){
    $http.get("https://api.nasa.gov/planetary/apod?api_key=" + key + "&date=" + $scope.date)
    .then(function success(result) {
      $scope.isError = false;
      $scope.nasa = result.data;
      console.log(result.statusText);
    }, function error(result) {
      console.log(result.statusText);
      $scope.isError = true;
      $scope.errorMsg = 'Escolha uma data a partir de 1995 com o formato: Ano/mês/dia';
    });
  };
});
