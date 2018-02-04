require.config({
    paths: {
        "angular": "lib/angular.min",
        "router": "lib/angular-ui-router.min",
        "jquery": "lib/jquery-3.2.1.min",
        "bootstrap": "lib/bootstrap.min",
        "dataTables": "lib/jquery.dataTables",
        "echarts": "lib/echarts.min",
        "app": "app",
        'homeCtrl': 'controller/homeCtrl',
        'aboutCtrl': 'controller/aboutCtrl'
    },
    shim: {
        "bootstrap": ["jquery"],
        "dataTables": ["jquery"],
        "echarts": ["jquery"],
        'angular': {
            exports: 'angular'
        }
    }
});
require(['jquery','angular','router','app','homeCtrl','aboutCtrl'],function (){

});