(function () {
  'use strict';

  angular.module('data')
  .controller('itemsController',itemsController);

  itemsController.$inject = ['items'];
  function itemsController(items) {
    var detail= this;
    detail.list = items.data.menu_items;
    
  }

})();
