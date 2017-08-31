(function () {
  'use strict';

  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController', NarrowItDownController )
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        found: '<',
        title: '@',
        message: '@',
        alert: '@',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'foundItemsList',
      bindToController: true,
      link: FoundItemsDirectiveLink
    };

    return ddo;
  }

  function FoundItemsDirectiveController() {
    var foundItemsList = this;

    foundItemsList.checkEmpty  = function () {
      if (foundItemsList.found.length === 0) {
        return true;
      }
      else {
        return false;
      }
    }

  }

  function FoundItemsDirectiveLink(scope, element, attrs, controller) {
    scope.$watch('foundItemsList.title', function (oldValue,newValue) {
        if (oldValue === "Nothing Found") {
          element.find("h3").css('color', 'red');
        }
        else {
          element.find("h3").css('color', 'black');
        }
    });
  }


  NarrowItDownController.$inject=['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var controller = this;

    controller.searchTerm = "";
    controller.title = "";
    controller.found = [];
    controller.messageRemove = "";

    controller.getMatchedMenuItems = function () {
      var promise = MenuSearchService.accessServer();
      this.messageRemove="";
      
      promise.then(function (response) {
        var source = response.data;
        controller.found = MenuSearchService.Search(source, controller.searchTerm);
        if (MenuSearchService.checkEmpty()) {
          controller.title = "Nothing Found";
        }
        else {
          controller.title = "List Found";
        }
      })
      .catch(function () {
        console.log('Error access database');
      });

    }

    controller.removeItem = function (itemIndex) {
      this.messageRemove = this.found[itemIndex].name +' has been removed';
      this.found = MenuSearchService.removeItem(itemIndex);
      if (MenuSearchService.checkEmpty()) {
        controller.title = "Nothing Found";
      }
    }

  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;
    var foundItems = [];

    service.accessServer = function (searchTerm) {
      var respone= $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      });

      return respone;
    };

    service.Search = function (source, searchTerm) {
      var result = [];
      for (var i = 0; i < source.menu_items.length; i++) {
        if (source.menu_items[i].description.indexOf(searchTerm)!==-1
        && searchTerm !== "") {
          var item= {
            name: source.menu_items[i].name,
            short_name: source.menu_items[i].short_name,
            description: source.menu_items[i].description
          };
          result.push(item);
        }
      }
      foundItems = result;
      return foundItems;
    };

    service.removeItem = function (itemIndex) {
      foundItems.splice(itemIndex,1);
      return foundItems;
    };

    service.checkEmpty  = function () {
      if (foundItems.length === 0) {
        return true;
      }
      else {
        return false;
      }
    }

  }


}
)();
