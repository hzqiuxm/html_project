/**
 *
 * Created by hzqiuxm on 2014/12/7.
 */

angular.module('productModle',[])
    .factory('productData',function(){

        return [
            {
                id: 1000,
                name: 'iphone6',
                quantity: 3,
                price: 5000
            },
            {
                id: 1001,
                name: 'iphone6-plus',
                quantity: 10,
                price: 65000
            },
            {
                id: 1002,
                name: 'ipad-air',
                quantity: 1,
                price: 8000
            },
            {
                id: 1003,
                name: 'mac-air',
                quantity: 2,
                price: 7500
            }
        ]
       })
    .controller('productController',function($scope,productData){

        $scope.Data = productData;
        $scope.orderType = 'id';
        $scope.order = '-';

        $scope.changeOrder = function(type){
            $scope.orderType = type;
            if($scope.order === ''){
                $scope.order = '-';
            }else{
                $scope.order ='';
            }
        }

    })
