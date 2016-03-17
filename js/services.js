app.service("baseballDataService", function($http){
  var baseballDataService = {};

   baseballDataService.getBatters = function(){
    return $http.get("http://localhost:3000/batters", {method: "jsponp"});
    //return $http.get("https://baseballdataapi.herokuapp.com/batters", {method: "jsonp"});
  }

   baseballDataService.getPitchers = function(){
    return $http.get("http://localhost:3000/pitchers");
    //return $http.get("https://baseballdataapi.herokuapp.com/pitchers", {method: "jsonp"});
  }

   baseballDataService.getAvgs = function(){
    return $http.get("http://localhost:3000/averages");
    //return $http.get("https://baseballdataapi.herokuapp.com/league-avg", {method: "jsonp"});
  }

  return baseballDataService;
});
