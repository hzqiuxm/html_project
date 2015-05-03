/**
 * Created by hzqiuxm on 2014/12/22.
 */
+function($){

        var demo1 = function(){

            $("p").click(function(){
                $(this).hide();
            });
        }

        var demo2 = function(){
            var $li = $("ul li:eq(1)");
            alert($li.text());
        }

}(window.jQuery);