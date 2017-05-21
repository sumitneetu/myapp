app.service('JobsStorage', ['global_storage','$window' ,function(global_storage,$window) {
if($window.localStorage.getItem(global_storage)==null){
    $window.localStorage.setItem(global_storage, JSON.stringify({}));
}
 // $window.localStorage.setItem(global_storage, JSON.stringify({}));
  this.getGlocalStorage= function(key) {
    var data = JSON.parse($window.localStorage.getItem(global_storage));
    if(data['"'+key+'"']){
      return data['"'+key+'"'];
    } else {
      return "";
    }
  };
  this.setGlocalStorage = function(key, value) {
      var data = JSON.parse($window.localStorage.getItem(global_storage));
      data['"'+key+'"'] = value;
      $window.localStorage.setItem(global_storage, JSON.stringify(data));
  };

  this.removeGlocalStorage = function(key) {
      var data = JSON.parse($window.localStorage.getItem(global_storage));
      delete data['"'+key+'"']
      $window.localStorage.setItem(global_storage, JSON.stringify(data));
  };
}]);


