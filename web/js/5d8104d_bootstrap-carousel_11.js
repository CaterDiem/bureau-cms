!function(b){var f=function(a,d){this.$element=b(a);this.options=d;"hover"==this.options.pause&&this.$element.on("mouseenter",b.proxy(this.pause,this)).on("mouseleave",b.proxy(this.cycle,this))};f.prototype={cycle:function(a){a||(this.paused=!1);this.options.interval&&!this.paused&&(this.interval=setInterval(b.proxy(this.next,this),this.options.interval));return this},to:function(a){var d=this.$element.find(".item.active"),e=d.parent().children(),d=e.index(d),c=this;if(!(a>e.length-1||0>a))return this.sliding?
this.$element.one("slid",function(){c.to(a)}):d==a?this.pause().cycle():this.slide(a>d?"next":"prev",b(e[a]))},pause:function(a){a||(this.paused=!0);this.$element.find(".next, .prev").length&&b.support.transition.end&&(this.$element.trigger(b.support.transition.end),this.cycle());clearInterval(this.interval);this.interval=null;return this},next:function(){if(!this.sliding)return this.slide("next")},prev:function(){if(!this.sliding)return this.slide("prev")},slide:function(a,d){var e=this.$element.find(".item.active"),
c=d||e[a](),h=this.interval,j="next"==a?"left":"right",g="next"==a?"first":"last",f=this;this.sliding=!0;h&&this.pause();c=c.length?c:this.$element.find(".item")[g]();g=b.Event("slide",{relatedTarget:c[0]});if(!c.hasClass("active")){if(b.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(g);if(g.isDefaultPrevented())return;c.addClass(a);c[0].offsetWidth;e.addClass(j);c.addClass(j);this.$element.one(b.support.transition.end,function(){c.removeClass([a,j].join(" ")).addClass("active");
e.removeClass(["active",j].join(" "));f.sliding=!1;setTimeout(function(){f.$element.trigger("slid")},0)})}else{this.$element.trigger(g);if(g.isDefaultPrevented())return;e.removeClass("active");c.addClass("active");this.sliding=!1;this.$element.trigger("slid")}h&&this.cycle();return this}}};var k=b.fn.carousel;b.fn.carousel=function(a){return this.each(function(){var d=b(this),e=d.data("carousel"),c=b.extend({},b.fn.carousel.defaults,"object"==typeof a&&a),h="string"==typeof a?a:c.slide;e||d.data("carousel",
e=new f(this,c));if("number"==typeof a)e.to(a);else if(h)e[h]();else c.interval&&e.cycle()})};b.fn.carousel.defaults={interval:5E3,pause:"hover"};b.fn.carousel.Constructor=f;b.fn.carousel.noConflict=function(){b.fn.carousel=k;return this};b(document).on("click.carousel.data-api","[data-slide]",function(a){var d=b(this),e,c=b(d.attr("data-target")||(e=d.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")),d=b.extend({},c.data(),d.data());c.carousel(d);a.preventDefault()})}(window.jQuery);