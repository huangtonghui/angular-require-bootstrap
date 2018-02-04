define(['router'], function(){
    var app = angular.module('app', ['ui.router']);
    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when("", "/home");
        $stateProvider.
            state("home", {
                url:"/home",
                views: {
                    "":{
                        templateUrl: 'view/home.html',
                        controller: 'homeCtrl'
                    }
                }
            })
            .state("about", {
                url:"/about",
                views: {
                    "":{
                        templateUrl: 'view/about.html',
                        controller: 'aboutCtrl'
                    }
                }

            })
    });

    return app;
});
