'use strict';

angular.module('advancedTopicsApp')
  .controller('ServiceCtrl', function ($scope,$http, Module, Gravatar, Gravatar2) {

    var controller = $scope;
    controller.user = {
      email: "martin.chavez@live.com"
    };

    Module.all().success(function(data){
      controller.modules = data.modules;
    });

    controller.gravatarUrl = Gravatar(controller.user.email);
    controller.gravatarUrl2 = Gravatar2(controller.user.email);


  });
