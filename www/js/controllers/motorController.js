(function () {

    var injectParams = ['$scope', 'dataService', '$window'];

    var MotorCtrl = function ($scope, dataService, $window) {

        $scope.homeAxis = function (axis) {
            console.log('Home axis: ' + axis);
        }

        $scope.motorsOff = function () {
            console.log('MotorsOff');

            dataService.runCommand("M18")
                .then(function (result) {
                    console.log('Motors turned off!')
                }, function (error) {
                    $window.alert(error.statusText);
                });
        }
    };

    MotorCtrl.$inject = injectParams;

    angular.module('smoothieApp').controller('MotorCtrl', MotorCtrl);
}());