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
 
Routes 
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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
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
