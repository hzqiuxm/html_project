/**
 *
 * Created by hzqiuxm on 2014/12/6.
 */
var myapp = angular.module('myApp',[],function($provide){

    //自定义服务 一般不会这么使用
    $provide.provider('customerService',function(){

        this.$get = function(){

            return {
                message : 'customerService message !'
            }

        }
    });
});

myapp.controller('firstController',function($scope,customerService){

    $scope.name = '张三';

    console.log(customerService);
});
