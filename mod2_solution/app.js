(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var ListBuy = this;

  ListBuy.List = ShoppingListCheckOffService.getItemsBuy();
  ListBuy.addToBoughtList = function (index) {
    ShoppingListCheckOffService.addToBoughtList(index);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var ListBought = this;
  ListBought.List = ShoppingListCheckOffService.getItemsBought();
  console.log(ListBought.List);
}

function ShoppingListCheckOffService() {
  var service = this;

  service.buy= [ {name: "cookies", quantity: 10}, {name: "bisque", quantity: 10},
                    {name: "snacks", quantity: 10}, {name: "banana", quantity: 10},
                    {name: "apple", quantity: 10}, {name: "hamburger", quantity:10}];
  service.bought= [];

  service.addToBoughtList= function (itemIndex) {
    service.bought.push(service.buy[itemIndex]);
    service.buy.splice(itemIndex, 1);
  }

  service.getItemsBuy = function () {
    return service.buy;
  }
  service.getItemsBought =function () {
    return service.bought;
  }

}
})();
