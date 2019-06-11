;(function ($) {
    $.fn.extend({
        "select": function (options) {
            //默认参数
            var defaluts = {
                slideBox: '', //下拉框
                option: '',  //下拉框里的子元素
                showBox:'' //显示内容的地方
            };
            var params = $.extend({}, defaluts, options || {}); //使用jQuery.extend 覆盖插件默认参数
            this.each(function () {  //这里的this 就是 jQuery对象
                //遍历所有的要高亮的dom,当调用 select()插件的是一个集合的时候。
                var $this = $(this); //获取当前dom 的 jQuery对象，这里的this是当前循环的dom
                //根据参数来设置 dom的样式
                $this.click(function (e) {
                    e.stopPropagation();
                    var $slide = $this.find(params.slideBox);
                    $slide.toggle();
                    $slide.on('click', params.option, function () {
                        var text = $(this).text();
                        $this.find(params.showBox).text(text);
                    })
                    e.stopPropagation();
                    $(document).click(function (event) {
                        if (!$slide.is(event.target) && $slide.has(event.target).length === 0) {
                            $slide.hide();
                        }
                    });
                });
            });
        }
    })
})(jQuery);