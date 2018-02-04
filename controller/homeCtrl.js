define(['app'],function(app) {
    return app.controller('homeCtrl',function($scope){
        $scope.name = 'hello home';
        console.log($scope.name);
    });
});



