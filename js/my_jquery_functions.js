/**
 * Created by hzqiuxm on 2014/10/30.
 */
//<script src="//ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.3.min.js">
//<script src="jquery-2.1.1.min.js" type="text/javascript"></script>

    $(document).ready(function(){
        /*
        //id隐藏
        $("#hide").click(function(){
            $("p").hide();
        });
        //id显示
        $("#show").click(function(){
            $("p").show();
        });
        */
        //切换
        $("button").click(function(){
            $("#p1").toggle();
        });
        //淡出淡入
        $("button").click(function(){
            $("#div1").fadeIn();
            $("#div2").fadeIn("slow");
            $("#div3").fadeIn(3000);
        });
        //滑动
        $(".flip").click(function(){
            $(".panel").slideToggle("slow");
        });

        $("#b1").click(function(){
            $("#div1").animate({left:'250px'});
        });

        $("#b2").click(function(){
            var div=$("#div2");
            div.animate({left:'100px'},"slow");
            div.animate({fontSize:'3em'},"slow");
        });

        $("#b3").click(function(){
            $("#p3").css("color","red").slideUp(2000).slideDown(2000);
        });

    });

