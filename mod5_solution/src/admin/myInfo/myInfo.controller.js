(function () {
  'use strict';

  angular.module('admin')
  .controller('myInfoController', myInfoController);

  myInfoController.$inject = ['adminService'];
  function myInfoController(adminService) {
    var myInfo = this;
    myInfo.completed = false;

    myInfo.Info = adminService.showInfo();

    if (myInfo.Info.firstname) {
      myInfo.completed = true;
    }

    myInfo.items = adminService.showItems();
  }

})();
