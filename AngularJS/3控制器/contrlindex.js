/**
 * Created by hzqiuxm on 2014/12/9.
 */
var myapp = angular.module("myApp",[],function(){

})
//隐式的依赖注入
.controller("firstController",function($scope){

    })

//显示的依赖注入
.controller("secondConroller",["$scope","$filter",function(scope,filter){

        console.log(filter('json')([1,2,3,4,5]));

    }])