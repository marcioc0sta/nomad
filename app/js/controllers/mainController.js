app.controller('mainController', function($scope, nasaService){
  $scope.nasaData = nasaService;
  $scope.date = '';
  $scope.errorMsg = 'Tente uma data no formato ano/mês/dia entre 1995 e o dia de hoje';
  $scope.onSubmit = function (){
    nasaService.date = $scope.date;
    $scope.nasaData.loadData().then(function(data){
      $scope.apod = data;
      $scope.nasaData.isLoading = false;
    }, function error(data){
      $scope.error = true;
      $scope.nasaData.isLoading = false;
    });

  };
});
