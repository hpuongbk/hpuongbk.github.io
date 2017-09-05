(function () {
  'use strict';

  angular.module('data')
  .controller('categoriesController', categoriesController);

  categoriesController.$inject = ['items'];
  function categoriesController(items) {
    var mainList = this;
    mainList.listCategories = items.data;    

    mainList.method1 = function () {
      console.log(items.data);
    };

  }

})();
