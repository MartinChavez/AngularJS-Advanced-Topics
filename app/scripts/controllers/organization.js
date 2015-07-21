'use strict';

angular.module('advancedTopicsApp')
  .controller('OrganizationCtrl', function ($http) {
    var controller = this;
    $http({method:'GET', url: '/example'}).success(function(data){
      controller.example = data;
    });

  });
