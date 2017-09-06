(function () {
"use strict";

angular.module('public')
.controller('CollectionController', CollectionController);

CollectionController.$inject = ['collectionCategories'];
function CollectionController(collectionCategories) {
  var $ctrl = this;
  $ctrl.collection = collectionCategories;
}


})();
