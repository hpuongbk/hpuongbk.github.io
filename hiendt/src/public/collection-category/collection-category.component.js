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

  function CollectionCategoriesController() {
    var $ctrl = this;

    for (var key in $ctrl.items) {
      if ($ctrl.items.hasOwnProperty(key)) {

        //load image at the first place
        var img = new Image();
        img.url = $ctrl.items[key].url;
        $(img).load(function() {
          // ...success
        });
      }

  }


})();
