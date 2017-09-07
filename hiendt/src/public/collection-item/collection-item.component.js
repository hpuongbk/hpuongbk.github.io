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

  var images = [];
  for (var key in $ctrl.items) {
    if ($ctrl.items.hasOwnProperty(key)) {
      images.push($ctrl.items[key].url)
    }
  }

  $('#gallery6').imagesGrid({
        images: images.slice(0, 18)
    });

  }

})();
