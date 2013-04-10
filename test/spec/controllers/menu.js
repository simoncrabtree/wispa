'use strict';

describe('Controller: MenuCtrl', function () {

  // load the controller's module
  beforeEach(module('wispaApp'));

  var MenuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    MenuCtrl = $controller('MenuCtrl', {
      $scope: scope
    });
  }));

  it('should have the correct title', function () {
    expect(scope.title).toBe('Menu Planner');
  });
});
