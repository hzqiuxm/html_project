/**
 *
 * Created by hzqiuxm on 2014/12/9.
 */
angular.module("myApp",[],function($filterProvider,$provide,$controllerProvider){

    $provide.service('Data',function(){
        return [
            {
                name:"张三",
                age:20,
                city:"上海"
            },

            {
                name:"李四",
                age:31,
                city:"杭州"
            },

            {
                name:"王五",
                age:28,
                city:"北京"
            }
        ]

    })

    $filterProvider.register("agefilter",function(){

        return function(obj){

            var newobj=[];

            angular.forEach(obj,function(o){

                if(o.age>20){
                    newobj.push(o);
                }
            })

            return newobj;
        }

    });

    $controllerProvider.register("firstController",function($scope,Data){

        $scope.data = Data;
    });
})
.filter('cityfilter',function(){

        return function(obj){
            var newobj=[];

            angular.forEach(obj,function(o){

                if(o.city === '杭州'){
                    newobj.push(o);
                }
            })

            return newobj;
        }

    })