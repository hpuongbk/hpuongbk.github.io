(function () {
  'use strict';

  angular.module('admin')
  .component('viewMyInfo', {
    templateUrl: 'src/admin/myInfo/myInfo.template.html',
    bindings: {
      items : '<'
    },
    controller: MenuItemAdminController,  
  });

  MenuItemAdminController.$inject =['ApiBasePath']
  function MenuItemAdminController(ApiBasePath) {
    var $ctrl = this;
    $ctrl.basePath = ApiBasePath;

    $ctrl.valid = function () {

      if ($ctrl.items) {
        return true;
      }
      else {
        return false;
      }

    };

    console.log($ctrl.valid());
  }

})();
