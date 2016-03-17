// var game = require('./game');
// Example batter

// Example pitcher
// I've included some advanced stats here that I need to figure out.
// Use this to store results of multiple matchups to test that everything works.
app.controller("MainController", function($scope, BaseballService){
  BaseballService.getBatters().then(function(payload){
    BaseballService.getPitchers().then(function(results){
      BaseballService.getAvgs().then(function(averages){
        $scope.batter_collection = payload.data;
        $scope.pitcher_collection = results.data;
        $scope.avgs_collection = averages.data;
      }, function(error){
        console.log("an error occurred");
      });
    });
  });
});




// this needs to get controller-fied //
// var getResult = function(result) {
//   if (result === 'SO') gameObject.OUT++;
//   gameObject[result]++;
// };
//console.log(pitcherCalc.probabilitySingle(pitcher));
//console.log('Single: ', batterProbabilitySingle(batter));
//console.log(game.getOutcome(batter, pitcher));
// Simulate 27 outs...
// while (gameObject.OUT < 27) {
//   getResult(game.getOutcome(batter, pitcher));
// }
// Output the game object once the while-loop has completed.
// console.log(gameObject);
