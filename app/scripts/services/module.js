/* Services*/
//Services should hold functions responsible for connecting and fetching data, then sharing it across our application

//Service Factory
                                           //This a naming convention
angular.module("advancedTopicsApp").factory("Module",function ModuleFactory($http){

  return {
    all: function() {
      return $http({method: 'GET', url: 'angular.json'});
    },
    create:function(module) {
      return $http({method: 'POST', url: 'angular.json', data: module});
    }

}

});
