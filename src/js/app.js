angular.module('alliesproApp', [
    'ui.router'
])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'view/home.html',
            controller: 'HomeCtrl as homeCtrl'
        })

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/');
    }])
    .config(['$locationProvider', function($locationProvider) {
        //this will eliminate the #! from the url
        $locationProvider.hashPrefix('');
    }])
 