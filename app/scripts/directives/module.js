/*Directives*/
//Directives Inherit their parent's scope by default
angular.module("advancedTopicsApp")
  .directive("module", function (){

    var num = 1;

    /* $scope */
  return {
    restrict: "E",
    templateUrl: "views/a-module.html",
    //Isolating the Scope
    //By passing an object to the scope option, you create an isolated scope.
    //This tells the directive to keep scope inside itself and not to inherit or share with others
     scope: {
       //You can pass as many bindings as you need

       //title:"@" passes in a string
       title:"=",  // '=' is a two-way binding,
       id:"="
     },
    //There are three options when binding data to an isolated scope: @,= and & characters


    /*Link*/
    //The link function is run after the directive has been compiled and linked up
    //This is the best place to do any DOM manipulation or logic functionality

    //element: refers to the outermost element of the directive
    //attrs stands for attributes
    link: function(scope, element, attrs){
      element.on("click",function(){
        element("div.module p").toggleClass("hidden");
      });

    }


    // By using the $scope variable, you can avoid using alias by binding the local variables to $scope
    //This is very helpful in the views, since you don't need to reference any controller
    //controller: function ($scope){
    //  $scope.title = "Angular Module"+num++
   // }

  };

    /*Important: Difference between $scope and Scope Object*/

    //The scope object is used to isolate a directive's scope
    //$scope is used to set values and functions on the scope
});
