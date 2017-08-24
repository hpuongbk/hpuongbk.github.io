(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
    return arrayOfStrings;
  }

  function checkEmpty(array) {
    $scope.message_error="";
    for (var i = 0; i < array.length; i++) {
      if (array[i]=="" || array[i]== " ") {
        array.splice(i, 1);
        $scope.message_error=
        "Note: Empty items, i.e., , , is considered as invalid items";
      }
    }
    return array;
  }

  $scope.menu="";
  $scope.message="";
  $scope.checkStatus="";

  var comma = ',';

  $scope.CheckLunch =function () {
    var array= splitString($scope.menu, comma);
    array = checkEmpty(array);

    if (array.length==0) {
      $scope.message= "Please enter data first";
      $scope.checkStatus = "message-error";
      $scope.message_error="";
    } else {
      if (array.length > 3) {
        $scope.message= "Too much!";
      }
      else {
        $scope.message= "Enjoy";
      }
      $scope.checkStatus = "message-success";
    }

  };
}
})();
