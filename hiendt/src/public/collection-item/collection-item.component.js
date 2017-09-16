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

CollectionItemController.$inject =['preloader','$rootScope'];
function CollectionItemController(preloader,$rootScope) {
  var $ctrl = this;

  var number = 0;

  var images = [];
  for (var key in $ctrl.items) {
    if ($ctrl.items.hasOwnProperty(key)) {
      images.push($ctrl.items[key].url)
      number++;

      // //load image at the first place
      // var img = new Image();
      // img.url = $ctrl.items[key].url;
      // $(img).load(function() {
      //   // success
      // });
    }
  }

  preloader.preloadImages(images).
  then(function () {
    $rootScope.$broadcast('spinner:re_activate', {on: true});
    $('#gallery').imagesGrid({
          images: images.slice(0, number)
      });
  })
  .finally(function () {
    $rootScope.$broadcast('spinner:re_activate', {on: false});
  });

  }

})();
