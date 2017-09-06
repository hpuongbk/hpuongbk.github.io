(function () {
"use strict";

angular.module('admin')
.service('adminService', adminService)
.constant('ApiBasePath', 'https://hphuong-course5.herokuapp.com');


adminService.$inject = ['$http', 'ApiBasePath'];
function adminService($http, ApiBasePath) {
  var service = this;
  service.Info= [];

  service.saveInfo = function (UserInfo) {
    service.Info = UserInfo;
  };


  service.showInfo = function (category) {
    return service.Info;
  };

  service.checkItemExit = function (short_name) {
    var respone = $http({
      method: 'GET',
      url: (ApiBasePath + '/menu_items/' + short_name+'.json')
    });
    if (short_name) {
      return respone.then(function (response) {
        service.items = response.data;
        return true;
      })
      .catch(function (error) {
        service.items ="";
        return false;
      });
    }
    else {
      return respone.catch(function (error) {
        return false;
      });
    }

  };

  service.showItems = function () {
    return service.items;
  };

}



})();
