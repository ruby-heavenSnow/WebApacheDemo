/**
 * Created by developer on 2/5/15.
 */
var logModule = angular.module('logModule', []);

logModule.controller('logCtrl', function($scope, $http) {

    //    row 1 first data
    $scope.onClickFirstStart = function() {
        console.log("click first start");
        $scope.showFirstMainData();
        $scope.showFirstXunData();
    }

    $scope.showFirstMainData = function() {
                 $http.get('data/firstMain.json').success(function(data1){
                            var mLengthFirst = data1.persons.length;
                            console.log("mLengthFirstMain"+mLengthFirst);
                            var randomNumFirst = Math.floor(Math.random()*mLengthFirst);
                            console.log("randomNumMain"+randomNumFirst);
                            $scope.firstMainCode = data1.persons[randomNumFirst].code;
                            $scope.firstMainName =  data1.persons[randomNumFirst].name;
                         }).error(function(){
                             alert("an unexpected error occurred!");
                         });
               }

    $scope.showFirstXunData = function() {
                     $http.get('data/firstXun.json').success(function(data){
                                var mLength = data.persons.length;
                                console.log("mLengthFirstXun"+mLength);
                                var randomNum = Math.floor(Math.random()*mLength);
                                console.log("randomNumXun"+randomNum);
                                $scope.firstXunCode = data.persons[randomNum].code;
                                $scope.firstXunName =  data.persons[randomNum].name;
                             }).error(function(){
                                 alert("an unexpected error occurred!");
                             });
                   }

//    row 2 data
    $scope.onClickSecondStart = function() {
        console.log("click second start");
        $scope.showSecondMainData();
        $scope.showSecondXunData();
    }

    $scope.showSecondMainData = function() {
                 $http.get('data/secondMain.json').success(function(data2){
                            var mLengthSecond1 = data2.persons.length;
                            console.log("mLengthSecondMain"+mLengthSecond1);
                            var randomNumSecond1 = Math.floor(Math.random()*mLengthSecond1);
                            console.log("randomNumMain"+randomNumSecond1);
                            $scope.secondMainCode = data2.persons[randomNumSecond1].code;
                            $scope.secondMainName =  data2.persons[randomNumSecond1].name;
                         }).error(function(){
                             alert("an unexpected error occurred!");
                         });
               }

    $scope.showSecondXunData = function() {
                     $http.get('data/secondXun.json').success(function(data3){
                                var mLengthSecond2 = data3.persons.length;
                                console.log("mLengthSecondXun"+mLengthSecond2);
                                var randomNumSecond2 = Math.floor(Math.random()*mLengthSecond2);
                                console.log("randomNumXun"+randomNumSecond2);
                                $scope.secondXunCode = data3.persons[randomNumSecond2].code;
                                $scope.secondXunName =  data3.persons[randomNumSecond2].name;
                             }).error(function(){
                                 alert("an unexpected error occurred!");
                             });
                   }

    //    row 3 data
        $scope.onClickThirdStart = function() {
            console.log("click third start");
            $scope.showThirdMainData();
            $scope.showThirdXunData();
        }

        $scope.showThirdMainData = function() {
                     $http.get('data/thirdMain.json').success(function(data4){
                                var mLengthFirst = data4.persons.length;
                                console.log("mLengthFirstMain"+mLengthFirst);
                                var randomNumFirst = Math.floor(Math.random()*mLengthFirst);
                                console.log("randomNumMain"+randomNumFirst);
                                $scope.thirdMainCode = data4.persons[randomNumFirst].code;
                                $scope.thirdMainName =  data4.persons[randomNumFirst].name;
                             }).error(function(){
                                 alert("an unexpected error occurred!");
                             });
                   }

        $scope.showThirdXunData = function() {
                         $http.get('data/thirdXun.json').success(function(data5){
                                    var mLength = data5.persons.length;
                                    console.log("mLengthFirstXun"+mLength);
                                    var randomNum = Math.floor(Math.random()*mLength);
                                    console.log("randomNumXun"+randomNum);
                                    $scope.thirdXunCode = data5.persons[randomNum].code;
                                    $scope.thirdXunName =  data5.persons[randomNum].name;
                                 }).error(function(){
                                     alert("an unexpected error occurred!");
                                 });
                       }

  });




