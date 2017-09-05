(function () {
  'use strict';

  angular.module('menuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home',{
      url: '/',
      templateUrl: 'src/menuApp/home.template.html'
    })

    .state('categories',{
      url: '/categories',
      templateUrl: 'src/data/template/categories.template.html',
      controller: 'categoriesController as mainList',
      resolve:  {
          items:['MenuDataService',function (MenuDataService) {
                  return MenuDataService.getAllCategories();
                }]
              }
    })

    .state('items', {
      url:'/categories/items/{short_name}',
      templateUrl: 'src/data/template/items.template.html',
      controller: 'itemsController as subList',
      resolve:  {
          items:['MenuDataService','$stateParams',function (MenuDataService,$stateParams) {
                  return MenuDataService.getItemsForCategory($stateParams.short_name);
                }]
              }
    });

  }

})();
