/**
 * Created by hzqiuxm on 2014/12/19.
 */

jQuery(function($){

    var  mo ={

        init : function(){

            mo.demo1();
            mo.demo2();
        },

        demo1 : function(){

            var $li = $('#ul1 li:eq(1)');
            console.log($li.text());

            var $p = $('p');
            console.log($p.attr('title'));

            var $li1 = $("<li title='new fruit'>火龙果</li>");
            $('#ul1').append($li1);

            var $dli = $("#ul1 li:eq(2)").remove();
            $("#ul2").append($dli);

            var $dli2 = $("#ul1 li[title='new fruit']").remove();
//            var $dli2 = $("#ul1 li").remove("li[title=new fruit]");不行
            $('#ul2').prepend($dli2);

//          $('#ul1').empty();

            $("#ul1 li").on('click',function(){
                $(this).clone(true).appendTo("#ul3");
            });

            $("#p1").replaceWith("<strong>你最不喜欢的水果是？</strong>");

            $("strong").wrap("<i></i>");

            $("#p2").html("你好，我是通过html()方法添加的内容");

            $("#panel h5").on('mouseover',function(){
                $(this).next().show();
            }).on('mouseout',function(){
                $(this).next().hide();
            });



        },

        demo2 : function(){
            $('#myButton').on('click', function () {
                var $btn = $(this).button('loading');
                console.log($btn);
                // business logic...

//                $(this).button('reset');
            })

            $('#myButton2').on('click',function(){
                $('#myButton').button('reset');
            });
        }

    };

    mo.init();

});