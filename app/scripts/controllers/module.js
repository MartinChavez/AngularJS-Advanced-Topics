'use strict';

angular.module('advancedTopicsApp')
  .controller('ModuleCtrl', function ($http, $routeParams) {
    var controller = this;

    if($routeParams.id == 1){
      controller.module = { name: "ngAnimate"}
    }
    if($routeParams.id == 2){
      controller.module = { name: "ngCookies"}
    }
    if($routeParams.id == 3){
      controller.module = { name: "ngResource"}
    }
  });
