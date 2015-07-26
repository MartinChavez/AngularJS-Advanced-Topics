angular.module("advancedTopicsApp")
  .directive("directiveExample", function (Module) {

    return {
      replace: true,
      restrict: "E",
      templateUrl: "views/directive-example.html",
      link: function(scope, element, attrs){
        scope.modules = Module.query();
      }

    };

  });
