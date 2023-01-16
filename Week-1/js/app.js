(function() {
    'use strict';
    
    angular.module('module1Assign', [])
        .controller('mod1-ctrl', mod1CtrlFun);
        mod1CtrlFun.$inject = ['$scope'];

        function mod1CtrlFun($scope){
            $scope.message ="";

            $scope.checkTooMuch = function(){
            var splitString = $scope.dishList.split(",");

            if(splitString.length < 3){
                $scope.message = "Enjoy!!";
            }else if(splitString.length >3){
                $scope.message = "Too Much!!";
            }

            }

        }
 })();
        

