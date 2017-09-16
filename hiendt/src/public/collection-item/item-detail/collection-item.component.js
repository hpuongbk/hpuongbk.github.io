(function () {
"use strict";

angular.module('public')
.component('subcollectionItemDetail', {
  templateUrl: 'src/public/collection-item/item-detail/sub-collection-item.html',
  bindings: {
    items: '<'
  },
  controller: CollectionItemController
});

CollectionItemController.$inject =['preloader'];
function CollectionItemController(preloader,$rootScope) {
  var $ctrl = this;

  var number = 0;

  var images = [];
  for (var key in $ctrl.items) {
    if ($ctrl.items.hasOwnProperty(key)) {
      images.push($ctrl.items[key].url)
      number++;
    }
  }

  preloader.preloadImages(images).
  then(function () {
    $('#gallery').imagesGrid({
          images: images.slice(0, number)
      });
  })
  .finally(function () {
  });

  }

})();
