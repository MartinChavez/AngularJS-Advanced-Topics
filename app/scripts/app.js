'use strict';

angular
  .module('advancedTopicsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    //Once you included ngRoute in the index.html (as a script reference),
    //the whole application has access to this service.
    //You can then use ngRoute as a dependency
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);



