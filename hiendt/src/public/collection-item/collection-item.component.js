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

      //load image at the first place
      var img = new Image();
      img.src = $ctrl.items[key].url;
      $(img).load(function() {
        // success
      });
    }
  }

  $('#gallery').imagesGrid({
        images: images.slice(0, number)
    });



  }

})();
