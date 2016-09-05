app.controller('mainController', function($scope, nasaService, $sce){
  $scope.nasaData = nasaService;
  $scope.date = '';
  $scope.errorCode = '';
  $scope.error400 = 'Check date format and put something between 1995 and today';
  $scope.error500 = 'Something is going wrong with the server, please, try again later';

  function loadContent(){
    nasaService.date = $scope.date;
    $scope.nasaData.loadData().then(function(data){
      $scope.apod = data;
      $scope.nasaData.isLoading = false;
      $scope.error = false;
      $scope.errorCode = '';
    }, function error(data){
      $scope.error = true;
      $scope.nasaData.isLoading = false;
      $scope.errorCode = $scope.nasaData.responseCode;
    });
  }

  $scope.onSubmit = function (){
    loadContent();
  };

  if (!$scope.error) {
    loadContent();
  }
});
