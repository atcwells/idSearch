angular.module('ngify', []);

module.exports = opsdui = angular.module('idsearch', [])
    .controller('id-search-controller', ['$scope', 'ExampleDataService', function ($scope, ExampleDataService) {
        ExampleDataService.getTest('idsearch').then(function (response) {
            $scope.test = response;
        });
    }])
    .constant('__env', window.__env)
    .config([function () {

    }]);

require('./services');
require('./controllers');
require('./filters');
require('./directives');
