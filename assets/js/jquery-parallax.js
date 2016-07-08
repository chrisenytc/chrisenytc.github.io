(function($){
    $.fn.parallax = function(options){
        var $$ = $(this);
        offset = $$.offset();
        var defaults = {
            "start": 0,
            "stop": $$.height(),
            "coeff": 0.95
        };
        var timer = 0;
        var opts = $.extend(defaults, options);
        var func = function(){
            timer = 0;
            var windowTop = $(window).scrollTop();
            if((windowTop >= opts.start) && (windowTop <= opts.stop)) {
                newCoord = windowTop * opts.coeff;
                $$.css({
                    "background-position": "0 "+ newCoord + "px"
                });
            }
        };
        return this.each(function(){
            $(window).bind('scroll', function() {
                window.clearTimeout(timer);
                timer = window.setTimeout(func, 1);
            });
        });
    };
})(jQuery);