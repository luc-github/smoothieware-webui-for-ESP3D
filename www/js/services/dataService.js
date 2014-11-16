(function () {

    var injectParams = ['$http', '$q'];

    var dataService = function ($http, $q) {
        var factory = {};

        factory.runCommand = function (cmd, silent) {
            var url = silent ? "/command_silent" : "/command";

            cmd += "\n";

            var test_data = "ok T:23.3 /0.0 @0 T1:23.4 /0.0 @0 B:24.8 /0.0 @0 P:29.4 /0.0 @0";

            return test_data;
/*
            return $http.post(url, cmd).then(
                function (results) {
                    return results.data;
                });
*/
        };

        return factory;
    };

    dataService.$inject = injectParams;

    angular.module('smoothieApp').factory('dataService', dataService);
}());