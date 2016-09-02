app.controller('mainController', function($scope, nasaService, $sce){
  $scope.nasaData = nasaService;
  $scope.date = '';
  $scope.errorMsg = 'Try american date format: YYYY/MM/DD. Put a date between 1995 and today';

  function loadContent(){
    nasaService.date = $scope.date;
    $scope.nasaData.loadData().then(function(data){
      $scope.apod = data;
      $scope.nasaData.isLoading = false;
    }, function error(data){
      $scope.error = true;
      $scope.nasaData.isLoading = false;
    });
  }

  $scope.onSubmit = function (){
    loadContent();
  };

  if (!$scope.error) {
    loadContent();
  }
});
