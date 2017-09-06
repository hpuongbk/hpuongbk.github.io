(function () {
"use strict";

angular.module('public')
.controller('CollectionItemsController', CollectionItemsController);

CollectionItemsController.$inject = ['collectionItems'];
function CollectionItemsController(collectionItems) {
  var $ctrl = this;
  $ctrl.Items = collectionItems;
}

})();
