(function () {
  'use strict',

  angular.module('data')
  .component('categoriesList', {
    templateUrl : 'src/data/template/categories.View.html',
    bindings: {
      items: '<',
      method1: '&'
    }
  });

})();
