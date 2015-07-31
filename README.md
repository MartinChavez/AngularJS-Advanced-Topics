<a name="README">[<img src="https://pbs.twimg.com/profile_images/2149314222/square.png" width="200px" height="200px" />](https://github.com/MartinChavez/Learn-Javascript)</a>

AngularJS : Advanced Topics
================

A project aimed to help the user master AngularJS advanced models. Each unit contains a tutorial with concepts, examples and best practices.

Topics
================
- Routing
 
Tools
====================
<a name="README">[<img src="http://www.jetbus.io/images/logo-node.png" width="50px" height="50px" />](https://nodejs.org/)</a>
<a name="README">[<img src="https://pbs.twimg.com/profile_images/3786155988/46ea2dd8b1bdd31a8ba61044cb5b6ebe_400x400.png" width="50px" height="50px" />](http://yeoman.io/)</a>
<a name="README">[<img src="https://camo.githubusercontent.com/39242419c60a53e1f3cecdeecb2460acce47366f/687474703a2f2f6772756e746a732e636f6d2f696d672f6772756e742d6c6f676f2d6e6f2d776f72646d61726b2e737667" width="50px" height="50px" />](https://github.com/gruntjs/grunt)</a>
<a name="README">[<img src="https://camo.githubusercontent.com/aad5f0385a2d8524cb366a1bad62bc74e797743a/687474703a2f2f692e696d6775722e636f6d2f516d47485067632e706e67" width="50px" height="50px" />](http://bower.io/)</a>
<a name="README">[<img src="https://www.npmjs.com/static/images/npm-logo.svg" width="50px" height="50px" />](https://www.npmjs.com/)</a>
 
Routes and $routeProvider
====================
```Javascript
/* Routes*/
//Angular routes allow us to map URLs to use templates so that every time the current route changes,
//the included view changes with it

/* $routeProvider*/
//$routeProvider allows you to specify Routes in the Angular application

//It is a good practice to re-declare your application module in every new file
angular.module('advancedTopicsApp').config(function ($routeProvider) {

  //Inside module.config, we can use one of $routeProvider's methods to define routes

  /* .when (path, route)*/
  //Adds a new route definition to the $route service

  /* .otherwise (params)*/
  //Sets route definition that will be used on route change when no other route definition is matched

  //You only need to define $routeProvider once and use method chaining
    $routeProvider
      .when('/', {
        /* Routing Components*/
        //It is possible to associate routes with templates and controllers
        templateUrl: 'views/organization.html',
        //It is a good practice to link to an already existing controller
        controller: 'OrganizationCtrl',
        //You can use 'controllerAs' to assign an alias to this controller
        controllerAs: 'organization'
      })
      .when('/service', {
        templateUrl: 'views/service.html',
        controller: 'ServiceCtrl',
        controllerAs: 'service'
      })
      .when('/directives', {
        templateUrl: 'views/directives.html',
        controller: 'DirectivesCtrl',
        controllerAs: 'directives'
      })
      //Declaring routes based on Id's
      //By passing in $routeParams we can obtain identifiers and utilize them
      .when('/module/:id', {
        templateUrl: 'views/module.html',
        controller: 'ModuleCtrl',
        controllerAs: 'module'
      })
      .otherwise({
        redirectTo: '/'
      });
});
```
Directives ($scope and Scope)
====================
```Javascript
/*Directives*/
//Directives Inherit their parent's scope by default
angular.module("advancedTopicsApp")
  .directive("module", function () {

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
        title: "=",  // '=' is a two-way binding,
        id: "="
      },
      //There are three options when binding data to an isolated scope: @,= and & characters

      /*Link*/
      //The link function is run after the directive has been compiled and linked up
      //This is the best place to do any DOM manipulation or logic functionality

      //element: refers to the outermost element of the directive
      //attrs stands for attributes
      link: function (scope, element, attrs) {
        element.on("click", function () {
          element("div.module p").toggleClass("hidden");
        });

      }
      // By using the $scope variable, you can avoid using alias by binding the local variables to $scope
      //This is very helpful in the views, since you don't need to reference any controller

    };

    /*Important: Difference between $scope and Scope Object*/

    //The scope object is used to isolate a directive's scope
    //$scope is used to set values and functions on the scope
  });
```

Directives (Require attribute)
====================
```Javascript
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
```
Services (Factory Pattern and $resource)
====================
```Javascript
/* Services*/
//Services should hold functions responsible for connecting and fetching data, then sharing it across our application

//Service Factory
                                           //This a naming convention
angular.module("advancedTopicsApp").factory("Module",function ModuleFactory($http, $resource){


  //By using $resource you implement all the required methods for CRUD
  return $resource("angular2.json",{},{
    update:{
      method:"PUT"
    }

  });
```
Provider Service Pattern 
====================
```Javascript
/*Provider Service Recipe*/
//It allows more configuration than a factory

//Providers run before everything else,so the only thing you can inject to them is other providers
angular.module("advancedTopicsApp").provider("Gravatar2", function Gravatar2Provider() {

  var avatarSize = 80; //Default size
  var avatarUrl = "http://www.gravatar.com/avatar/";

  this.setSize = function(size){
    avatarSize = size;
  };


//The $get function is where you return an object and inject services
  this.$get = function() {
    return function(email) {
      return avatarUrl + CryptoJS.MD5(email) + "?size=" + avatarSize.toString();
    };
  };

});
```

Best Practices 
====================
```Javascript
angular.module('advancedTopicsApp')
  .controller('OrganizationCtrl', function ($http) {

    //It is a good practice to assign 'this' to a variable in order to use 'this' keyword inside the callback
    var controller = this;
    $http({method:'GET', url: 'angular.json'}).success(function(data){
      controller.modules = data.modules;
    });
```

Install
====================
```Terminal
npm install
bower install
```

Run and Play
====================
```Terminal
grunt serve
```


Questions ?
====================
If you have any questions, please feel free to ask me:
[Martin Chavez Aguilar](mailto:martin.chavez@live.com)

Contributors
====================
* [Martin Chavez Aguilar](http://martinchavezaguilar.com/) - Wrote the project

References
====================
* [Code School](https://www.codeschool.com/)
