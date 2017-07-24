var app = angular.module("myApp", ['ui.router']);
    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when("", "/home");
        $stateProvider
            .state("home", {
                url:"/home",
                views: {
                    "":{
                        templateUrl: 'view/home.html',
                        controller: 'homeCtrl'
                    },
                    "child":{templateUrl: 'view/home.html'}
                }
            })
            .state("about", {
                url:"/about",
                views: {
                    "":{
                        templateUrl: 'view/about.html',
                        controller: 'aboutCtrl'
                    },
                    "child":{templateUrl: 'view/about.html'}
                }

            })
    });

