angular.module("advancedTopicsApp")
  .directive("directiveExample", function (Module) {

    return {
      replace: true,
      restrict: "E",
      templateUrl: "views/directive-example.html",
      link: function(scope, element, attrs){
        console.log(Module.query());
        scope.innerDirectives = Module.query();
      },
      controller: function($scope){
        this.setActive = function(innerDirective){
          $scope.active = innerDirective.active;
        }

        this.getActive = function(){
          return $scope.active;
        }

      }

    };

  });
