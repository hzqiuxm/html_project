/**
 *
 * Created by hzqiuxm on 2014/12/6.
 */

angular.module('myApp',[])
    .controller('firstController',function($scope,$filter){
        $scope.name = 'hello';
        $scope.today = new Date();
        $scope.city = [
            {
                name :"上海",
                py:'shanggai'

            },
            {
                name:"杭州",
                py:"hangzhou"
            }

        ]

        //使用过滤器
        var numbwe = $filter('number')(3000);
        console.log(numbwe);
    })
