describe('menucategories', function () {

  var menucategories;
  var $httpBackend;
  var ApiBasePath;

  beforeEach(function () {
    module('admin');

    inject(function ($injector) {
      menucategories = $injector.get('adminService');
      $httpBackend = $injector.get('$httpBackend');
      ApiBasePath = $injector.get('ApiBasePath');
    });
  });

  it('should return categories list', function() {

    $httpBackend.whenGET(ApiBasePath + '/menu_items/L1.json')
    .respond(true);

    menucategories.checkItemExit('L1').then(function(response) {
      expect(response).toEqual(true);
    });

    $httpBackend.flush();
  });

});
