$.fn.scrollLock=function(){return $(this).on("DOMMouseScroll mousewheel",function(h){var g=$(this),f=this.scrollTop,d=this.scrollHeight,b=g.height(),i=h.originalEvent.wheelDelta,a=i>0,c=function(){h.stopPropagation();h.preventDefault();h.returnValue=false;return false};if(!a&&-i>d-b-f){g.scrollTop(d);return c()}else{if(a&&i>f){g.scrollTop(0);return c()}}})};
$.fn.scrollRelease=function(){return $(this).off("DOMMouseScroll mousewheel")};
$.fn.scrollTo = function(target,options,callback){
    if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
    var settings = $.extend({
        scrollTarget  : target,
        offsetTop     : 50,
        duration      : 500,
        easing        : 'swing',
        horizontal    : false
    }, options);
    if(!this.each) return;
    return this.each(function(){
        var scrollPane = $(this);
        var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
        if(!settings.horizontal){
            var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
            scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
                if (typeof callback == 'function') { callback.call(this); }
            });
        }else{
            var scrollX = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().left + scrollPane.scrollLeft() - parseInt(settings.offsetTop);
            scrollPane.animate({scrollLeft : scrollX }, parseInt(settings.duration), settings.easing, function(){
                if (typeof callback == 'function') { callback.call(this); }
            });
        }
    });
};