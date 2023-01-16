(function() {
    'use strict';
    
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', MyLunchFunction);
        MyLunchFunction.$inject = ['$scope'];

        function MyLunchFunction($scope){
            $scope.message ="";

            $scope.checkTooMuch = function(){

                if($scope.dishList){
                    var splitString = $scope.dishList.split(",");
    
                    if(splitString.length <= 3){
                        $scope.message = "Enjoy!!";
                    }else if(splitString.length >3){
                        $scope.message = "Too Much!!";
                    }
    
                }else{
                    $scope.message = "Please Enter Data first !!"
                }   

            }

        }
 })();
        

