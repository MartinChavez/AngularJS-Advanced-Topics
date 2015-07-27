angular.module("advancedTopicsApp")
  .directive("innerDirective", function () {

    return {
      restrict: "E",
      templateUrl: "views/inner-directive.html",
      scope:{
        innerDirective:"="
      },
      /*Require directive*/
      //It allows to share a controller between directives
      // ^ indicates that you are looking for a parent directive
      require:"^directiveExample",

      /*Link's 4th parameter*/
      //The required directive's controller is passed in as link's 4th parameter and can have any name
      link: function(scope,element,attrs,DirectivesCtrl){

        scope.makeActive = function(){
          DirectivesCtrl.setActive(scope.innerDirective);
        }

        scope.innerDirectiveActive = function (){
          return DirectivesCtrl.getActive() === scope.innerDirective.name;

        }

      }


    };

  });
