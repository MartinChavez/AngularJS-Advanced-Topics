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
