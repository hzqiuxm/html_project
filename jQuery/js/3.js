/**
 * Created by hzqiuxm on 2014/12/23.
 */
jQuery(function($){

    var  mo ={

        init : function(){

            mo.demo1();

        },

        demo1 : function(){

            bootbox.alert("Hello world!");
            $("#send").on("click",function(){
                $("#reset").load("test.html .para");
            });

        }

    };

    mo.init();

});