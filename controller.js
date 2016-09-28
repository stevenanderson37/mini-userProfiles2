angular.module('userProfiles').controller('MainController', function($scope, mainService) {


  mainService.getUsers().then(function(response) {
    $scope.users = response.data.data;
  });




});
