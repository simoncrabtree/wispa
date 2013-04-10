'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('wispaApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have the correct title', function () {
    expect(scope.title).toBe('Home');
  });
});
