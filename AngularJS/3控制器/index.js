/**
 * Created by hzqiuxm on 2014/12/4.
 */

var firstController = function($scope){
    $scope.name = "张三";
    $scope.age = 20;
    console.log($scope);
}

var secondController = function($scope){
    $scope.name = "李四";
    console.log($scope);
}

var thirdController = function($scope){
    $scope.date = new Date();

//    setInterval(function(){
//        $scope.date = new Date();
//    },1000)

    setInterval(function(){
        $scope.$apply(function(){
            $scope.date = new Date();
        });
    },1000)
}

var fourController=function($scope){
    $scope.name = "张三";
    $scope.count = 0;

    $scope.$watch('name',function(newvalue,oldvalue){
        ++$scope.count;

        if($scope.count>20){
            $scope.name = "改变次数用完了！";
        }
    });


}