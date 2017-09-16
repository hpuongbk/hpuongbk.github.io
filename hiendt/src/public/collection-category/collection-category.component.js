(function () {
"use strict";

angular.module('public')
.component('menuCategory', {
  templateUrl: 'src/public/collection-category/collection-category.html',
  bindings: {
    items: '<'
  },
  controller: CollectionCategoriesController
});

  CollectionCategoriesController.$inject = ['preloader'];
  function CollectionCategoriesController(preloader) {
    var $ctrl = this;

    var images = [];
    for (var key in $ctrl.items) {
      if ($ctrl.items.hasOwnProperty(key)) {
        //load image at the first place
        images.push($ctrl.items[key].url);
      }
    }

    preloader.preloadImages(images).
    then(function () {
    })
    .finally(function () {
    });

  }


})();
