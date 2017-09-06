(function () {
"use strict";

angular.module('public')
.component('collectionItem', {
  templateUrl: 'src/public/collection-item/collection-item.html',
  bindings: {
    items: '<'
  },
  controller: CollectionItemController
});


function CollectionItemController() {
  var $ctrl = this;

}

})();
