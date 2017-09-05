(function () {
  'use strict';

  angular.module('data')
  .component('itemsList',{
    templateUrl: 'src/data/template/itemDetail.View.html',
    bindings:{
      items: '<'
    }
  });

})();
