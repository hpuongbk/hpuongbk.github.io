(function () {
"use strict";

angular.module('common')
.service('CollectionService', CollectionService);


CollectionService.$inject = ['$http'];
function CollectionService($http, ApiPath) {
  var service = this;

  service.getCollections = function () {
    return $http.get('source/collections.json').then(function (response) {
      return response.data;
    });
  };


  service.getItems = function (full_name) {
    return $http.get('source/items/' + full_name + '.json').then(function (response) {
      return response.data;
    });
  };

}



})();
