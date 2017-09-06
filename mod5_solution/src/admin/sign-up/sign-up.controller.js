(function () {
  'use strict';

  angular.module('admin')
  .controller('RegistrationController',RegistrationController);

  RegistrationController.$inject = ['adminService','ApiBasePath'];
  function RegistrationController(adminService,ApiBasePath) {
    var reg = this;
    reg.basePath = ApiBasePath;
    reg.checkEmpty = true;


    reg.submit = function () {
      reg.completed = true;
      adminService.saveInfo(reg.user);

    };

    reg.check = function (value) {

      if (value) {
        reg.checkEmpty = false;
      }
      else {
        reg.checkEmpty = true;
      }

      var promise = adminService.checkItemExit(value);
      
      promise.then(function (response) {
        reg.checkFavorite = response;

      });

      return true;
    }
  }
})();
