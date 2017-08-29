(function () {
'use strict';

angular.module('Memory', [])
.controller('MemoryController', MemoryController)
.service('MemoryService', MemoryService)
.directive('homePageDirective', HomePageDirective);


// Controller
MemoryController.$inject=['MemoryService'];
function MemoryController(MemoryService) {

  var $menu = this ;
  $menu.name ='phuong';
  $menu.loadCollectionCategories= MemoryService.loadCollectionCategories();
}

function CollectionController() {
  var $collection = this;
  $collection.name= "phuong";
}

// Directive
function HomePageDirective() {
  var ddo = {
    templateUrl: 'snippets/home-page.html'
  };
  return ddo;
}

// Service
MemoryService.$inject=['$http', '$location'];
function MemoryService($http, $location) {
  var service= this;

  service.getServerData = function (url) {
    var respond= $http({
      method: "GET",
      url: url
    });
    return respond;
  }

  service.insertHtml = function (selector, html) {
    var elem= document.querySelector(selector);
    elem.innerHTML = html;
  }

  service.loadCollectionCategories=function () {
    var promise= service.getServerData('snippets/collection-page.html');
    promise.then({


    });
  }
}

})();
