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
