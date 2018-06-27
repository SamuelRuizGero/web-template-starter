angular.module('alliesproApp')
.controller('HomeCtrl', ['$scope', function($scope) {
        var homeCtrl = this;
        console.log('Loaded.');
        homeCtrl.message = 'Hello World Test';
    }
]);
