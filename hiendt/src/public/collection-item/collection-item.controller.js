(function () {
"use strict";

angular.module('public')
.controller('subcollectionItemDetailController', subcollectionItemDetailController);

subcollectionItemDetailController.$inject = ['subcollectionItemsDetail'];
function subcollectionItemDetailController(subcollectionItemsDetail) {
  var $ctrl = this;
  $ctrl.items = subcollectionItemsDetail;
}

})();
