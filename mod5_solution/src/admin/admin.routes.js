(function () {
  'use strict';

  angular.module('admin')
  .config(config);


  config.$inject = ['$stateProvider'];
  function config($stateProvider) {
    $stateProvider

    .state('admin',{
      abstract: true,
      templateUrl: 'src/admin/admin.html'
    })

    .state('admin.SignUp',{
      url: '/sign_up',
      templateUrl: 'src/admin/sign-up/sign-up.html',
      controller: 'RegistrationController as reg',

    })

    .state('admin.myInfo',{
      url:'/my_info',
      templateUrl: 'src/admin/myInfo/myInfo.html',
      controller: 'myInfoController as myInfo',
    
    });

  }

})();
