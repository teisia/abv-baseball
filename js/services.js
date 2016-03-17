app.service("BaseballService", function($http){
  var BaseballService = {};

  BaseballService.getBatters = function(){
    return $http.get("http://localhost:3000/batters", {method: "jsponp"});
    //return $http.get("https://baseballdataapi.herokuapp.com/batters", {method: "jsonp"});
  }

  BaseballService.getPitchers = function(){
    return $http.get("http://localhost:3000/pitchers");
    //return $http.get("https://baseballdataapi.herokuapp.com/pitchers", {method: "jsonp"});
  }

  BaseballService.getAvgs = function(){
    return $http.get("http://localhost:3000/league-avg");
    //return $http.get("https://baseballdataapi.herokuapp.com/league-avg", {method: "jsonp"});
  }

  return BaseballService;
});
