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

  var number = 0;

  var images = [];
  for (var key in $ctrl.items) {
    if ($ctrl.items.hasOwnProperty(key)) {
      images.push($ctrl.items[key].url)
      number++;
    }
  }

  $('#gallery6').imagesGrid({
        images: images.slice(0, number)
    });

  }

})();
