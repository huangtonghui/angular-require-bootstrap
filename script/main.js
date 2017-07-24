require({
    baseUrl: "script",
    paths: {
        //"angular": "angular.min",
        //"uiRouter": "angular-ui-router.min",
        "jquery": "jquery-3.2.1.min",
        "bootstrap": "bootstrap.min",
        "dataTables": "jquery.dataTables",
        "echarts": "echarts.min",
        "router": "router",
        "homeCtrl": "controller/homeCtrl"
    },
    shim: {
        "bootstrap": ["jquery"],
        "dataTables": ["jquery"],
        "echarts": ["jquery"]
    }
});
require(
    //['angular','uiRouter',"jquery", "dataTables", "bootstrap", "echarts",'router'],
    ["jquery", "dataTables", "bootstrap", "echarts",'router'],
    function(angular) {
        window.onload = function(){
            angular.bootstrap(document,["myApp"]);
        };
    }
);