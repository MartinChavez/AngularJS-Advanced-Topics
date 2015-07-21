'use strict';

angular.module('advancedTopicsApp')
  .controller('OrganizationCtrl', function ($http) {

    //It is a good practice to assign 'this' to a variable in order to use 'this' keyword inside the callback
    var controller = this;
    $http({method:'GET', url: 'angular.json'}).success(function(data){
      controller.modules = data.modules;
    });

    //You can create functions that will be utilized by forms
    this.create = function(module){

    }

  });
