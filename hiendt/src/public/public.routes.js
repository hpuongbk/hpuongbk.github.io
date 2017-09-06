(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.collections', {
      url: '/collections',
      templateUrl: 'src/public/collection/collection.html',
      controller: 'CollectionController',
      controllerAs: 'colCtrl',
      resolve: {
        collectionCategories:
          ['CollectionService', function (CollectionService) {
            return CollectionService.getCollections();
          }]
      }
    })
    .state('public.collectionItems', {
      url: '/collections/{collectionId}',
      templateUrl: 'src/public/collection-items/collection-items.html',
      controller: 'CollectionItemsController',
      controllerAs: 'collectionItemsCtrl',
      resolve: {
        collectionItems: ['$stateParams','CollectionService', function ($stateParams, CollectionService) {
          return CollectionService.getItems($stateParams.collectionId);
        }]
      }
    });
}
})();
