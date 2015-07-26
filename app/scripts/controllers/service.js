'use strict';

angular.module('advancedTopicsApp')
  .controller('ServiceCtrl', function ($scope,$http, Module, Gravatar, Gravatar2) {

    var controller = $scope;
    controller.user = {
      email: "martin.chavez@live.com"
    };

    //Module.all().success(function(data){
    //  console.log(data);
    //  controller.modules = data.modules;
   // });

    //To fetch all of the items, you can use the query method
    controller.modules = Module.query();

    //To delete
    //controller.modules = Module.$delete(module);

    //To get a single resource
    //Module.get({id:2});

    //To create a new resource
    //Module.save({id:2})

    controller.gravatarUrl = Gravatar(controller.user.email);
    controller.gravatarUrl2 = Gravatar2(controller.user.email);


  });
