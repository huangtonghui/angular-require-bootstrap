define(['app'],function(app) {
   return app.controller('aboutCtrl',function($scope){
        $scope.name = 'hello about';
        console.log($scope.name);
   });
});

