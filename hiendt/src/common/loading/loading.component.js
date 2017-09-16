(function() {
"use strict";

angular.module('common')
.component('loading', {
  template: '<img src="images/spinner.svg" ng-if="$ctrl.show">',
  controller: LoadingController
});


LoadingController.$inject = ['$rootScope'];
function LoadingController ($rootScope) {
  var $ctrl = this;
  var listener;
  var re_listener;

  $ctrl.$onInit = function() {
    $ctrl.show = false;
    listener = $rootScope.$on('spinner:activate', onSpinnerActivate);
    re_listener = $rootScope.$on('spinner:re_activate', onSpinnerActivate);
  };

  $ctrl.$onDestroy = function() {
    listener();
    re_listener();
  };

  function onSpinnerActivate(event, data) {
    $ctrl.show = data.on;
  }
}

})();
