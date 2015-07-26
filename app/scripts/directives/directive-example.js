angular.module("advancedTopicsApp")
  .directive("directiveExample", function () {


    console.log('directiveExample');
    return {
      replace: true,
      restrict: "E",
      templateUrl: "views/directive-example.html"

    };

  });
