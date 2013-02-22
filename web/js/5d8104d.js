!function(c){c(function(){var e=c.support,a;a:{a=document.createElement("bootstrap");var d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},b;for(b in d)if(void 0!==a.style[b]){a=d[b];break a}a=void 0}e.transition=a&&{end:a}})}(window.jQuery);

!function(b){var f=function(a,c){this.options=c;this.$element=b(a).delegate('[data-dismiss="modal"]',"click.dismiss.modal",b.proxy(this.hide,this));this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};f.prototype={constructor:f,toggle:function(){return this[!this.isShown?"show":"hide"]()},show:function(){var a=this,c=b.Event("show");this.$element.trigger(c);!this.isShown&&!c.isDefaultPrevented()&&(this.isShown=!0,this.escape(),this.backdrop(function(){var c=b.support.transition&&
a.$element.hasClass("fade");a.$element.parent().length||a.$element.appendTo(document.body);a.$element.show();c&&a.$element[0].offsetWidth;a.$element.addClass("in").attr("aria-hidden",!1);a.enforceFocus();c?a.$element.one(b.support.transition.end,function(){a.$element.focus().trigger("shown")}):a.$element.focus().trigger("shown")}))},hide:function(a){a&&a.preventDefault();a=b.Event("hide");this.$element.trigger(a);this.isShown&&!a.isDefaultPrevented()&&(this.isShown=!1,this.escape(),b(document).off("focusin.modal"),
this.$element.removeClass("in").attr("aria-hidden",!0),b.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal())},enforceFocus:function(){var a=this;b(document).on("focusin.modal",function(b){a.$element[0]!==b.target&&!a.$element.has(b.target).length&&a.$element.focus()})},escape:function(){var a=this;if(this.isShown&&this.options.keyboard)this.$element.on("keyup.dismiss.modal",function(b){27==b.which&&a.hide()});else this.isShown||this.$element.off("keyup.dismiss.modal")},
hideWithTransition:function(){var a=this,c=setTimeout(function(){a.$element.off(b.support.transition.end);a.hideModal()},500);this.$element.one(b.support.transition.end,function(){clearTimeout(c);a.hideModal()})},hideModal:function(){this.$element.hide().trigger("hidden");this.backdrop()},removeBackdrop:function(){this.$backdrop.remove();this.$backdrop=null},backdrop:function(a){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=b.support.transition&&c;this.$backdrop=
b('<div class="modal-backdrop '+c+'" />').appendTo(document.body);this.$backdrop.click("static"==this.options.backdrop?b.proxy(this.$element[0].focus,this.$element[0]):b.proxy(this.hide,this));d&&this.$backdrop[0].offsetWidth;this.$backdrop.addClass("in");d?this.$backdrop.one(b.support.transition.end,a):a()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),b.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(b.support.transition.end,b.proxy(this.removeBackdrop,
this)):this.removeBackdrop()):a&&a()}};var g=b.fn.modal;b.fn.modal=function(a){return this.each(function(){var c=b(this),d=c.data("modal"),e=b.extend({},b.fn.modal.defaults,c.data(),"object"==typeof a&&a);d||c.data("modal",d=new f(this,e));if("string"==typeof a)d[a]();else e.show&&d.show()})};b.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0};b.fn.modal.Constructor=f;b.fn.modal.noConflict=function(){b.fn.modal=g;return this};b(document).on("click.modal.data-api",'[data-toggle="modal"]',function(a){var c=
b(this),d=c.attr("href"),e=b(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),d=e.data("modal")?"toggle":b.extend({remote:!/#/.test(d)&&d},e.data(),c.data());a.preventDefault();e.modal(d).one("hide",function(){c.focus()})})}(window.jQuery);

!function(d){function h(){d(f).each(function(){g(d(this)).removeClass("open")})}function g(b){var a=b.attr("data-target");a||(a=(a=b.attr("href"))&&/#/.test(a)&&a.replace(/.*(?=#[^\s]*$)/,""));a=d(a);a.length||(a=b.parent());return a}var f="[data-toggle=dropdown]",e=function(b){var a=d(b).on("click.dropdown.data-api",this.toggle);d("html").on("click.dropdown.data-api",function(){a.parent().removeClass("open")})};e.prototype={constructor:e,toggle:function(){var b=d(this),a,c;if(!b.is(".disabled, :disabled"))return a=
g(b),c=a.hasClass("open"),h(),c||a.toggleClass("open"),b.focus(),!1},keydown:function(b){var a,c,e;if(/(38|40|27)/.test(b.keyCode)&&(a=d(this),b.preventDefault(),b.stopPropagation(),!a.is(".disabled, :disabled"))){c=g(a);e=c.hasClass("open");if(!e||e&&27==b.keyCode)return a.click();a=d("[role=menu] li:not(.divider):visible a",c);a.length&&(c=a.index(a.filter(":focus")),38==b.keyCode&&0<c&&c--,40==b.keyCode&&c<a.length-1&&c++,~c||(c=0),a.eq(c).focus())}}};var j=d.fn.dropdown;d.fn.dropdown=function(b){return this.each(function(){var a=
d(this),c=a.data("dropdown");c||a.data("dropdown",c=new e(this));"string"==typeof b&&c[b].call(a)})};d.fn.dropdown.Constructor=e;d.fn.dropdown.noConflict=function(){d.fn.dropdown=j;return this};d(document).on("click.dropdown.data-api touchstart.dropdown.data-api",h).on("click.dropdown touchstart.dropdown.data-api",".dropdown form",function(b){b.stopPropagation()}).on("touchstart.dropdown.data-api",".dropdown-menu",function(b){b.stopPropagation()}).on("click.dropdown.data-api touchstart.dropdown.data-api",
f,e.prototype.toggle).on("keydown.dropdown.data-api touchstart.dropdown.data-api",f+", [role=menu]",e.prototype.keydown)}(window.jQuery);

!function(b){function h(a,d){var c=b.proxy(this.process,this),f=b(a).is("body")?b(window):b(a),g;this.options=b.extend({},b.fn.scrollspy.defaults,d);this.$scrollElement=f.on("scroll.scroll-spy.data-api",c);this.selector=(this.options.target||(g=b(a).attr("href"))&&g.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a";this.$body=b("body");this.refresh();this.process()}h.prototype={constructor:h,refresh:function(){var a=this;this.offsets=b([]);this.targets=b([]);this.$body.find(this.selector).map(function(){var d=
b(this),d=d.data("target")||d.attr("href"),c=/^#\w/.test(d)&&b(d);return c&&c.length&&[[c.position().top+a.$scrollElement.scrollTop(),d]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){a.offsets.push(this[0]);a.targets.push(this[1])})},process:function(){var a=this.$scrollElement.scrollTop()+this.options.offset,b=(this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight)-this.$scrollElement.height(),c=this.offsets,f=this.targets,g=this.activeTarget,e;if(a>=b)return g!=(e=f.last()[0])&&
this.activate(e);for(e=c.length;e--;)g!=f[e]&&a>=c[e]&&(!c[e+1]||a<=c[e+1])&&this.activate(f[e])},activate:function(a){this.activeTarget=a;b(this.selector).parent(".active").removeClass("active");a=b(this.selector+'[data-target="'+a+'"],'+this.selector+'[href="'+a+'"]').parent("li").addClass("active");a.parent(".dropdown-menu").length&&(a=a.closest("li.dropdown").addClass("active"));a.trigger("activate")}};var j=b.fn.scrollspy;b.fn.scrollspy=function(a){return this.each(function(){var d=b(this),c=
d.data("scrollspy"),f="object"==typeof a&&a;c||d.data("scrollspy",c=new h(this,f));if("string"==typeof a)c[a]()})};b.fn.scrollspy.Constructor=h;b.fn.scrollspy.defaults={offset:10};b.fn.scrollspy.noConflict=function(){b.fn.scrollspy=j;return this};b(window).on("load",function(){b('[data-spy="scroll"]').each(function(){var a=b(this);a.scrollspy(a.data())})})}(window.jQuery);

!function(c){var e=function(a){this.element=c(a)};e.prototype={constructor:e,show:function(){var a=this.element,f=a.closest("ul:not(.dropdown-menu)"),b=a.attr("data-target"),g,d;b||(b=(b=a.attr("href"))&&b.replace(/.*(?=#[^\s]*$)/,""));a.parent("li").hasClass("active")||(g=f.find(".active:last a")[0],d=c.Event("show",{relatedTarget:g}),a.trigger(d),d.isDefaultPrevented()||(b=c(b),this.activate(a.parent("li"),f),this.activate(b,b.parent(),function(){a.trigger({type:"shown",relatedTarget:g})})))},activate:function(a,
f,b){function g(){d.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");a.addClass("active");e?(a[0].offsetWidth,a.addClass("in")):a.removeClass("fade");a.parent(".dropdown-menu")&&a.closest("li.dropdown").addClass("active");b&&b()}var d=f.find("> .active"),e=b&&c.support.transition&&d.hasClass("fade");e?d.one(c.support.transition.end,g):g();d.removeClass("in")}};var h=c.fn.tab;c.fn.tab=function(a){return this.each(function(){var f=c(this),b=f.data("tab");b||f.data("tab",
b=new e(this));if("string"==typeof a)b[a]()})};c.fn.tab.Constructor=e;c.fn.tab.noConflict=function(){c.fn.tab=h;return this};c(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(a){a.preventDefault();c(this).tab("show")})}(window.jQuery);

!function(b){var d=function(a,c){this.init("tooltip",a,c)};d.prototype={constructor:d,init:function(a,c,f){this.type=a;this.$element=b(c);this.options=this.getOptions(f);this.enabled=!0;if("click"==this.options.trigger)this.$element.on("click."+this.type,this.options.selector,b.proxy(this.toggle,this));else"manual"!=this.options.trigger&&(a="hover"==this.options.trigger?"mouseenter":"focus",c="hover"==this.options.trigger?"mouseleave":"blur",this.$element.on(a+"."+this.type,this.options.selector,
b.proxy(this.enter,this)),this.$element.on(c+"."+this.type,this.options.selector,b.proxy(this.leave,this)));this.options.selector?this._options=b.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(a){a=b.extend({},b.fn[this.type].defaults,a,this.$element.data());a.delay&&"number"==typeof a.delay&&(a.delay={show:a.delay,hide:a.delay});return a},enter:function(a){var c=b(a.currentTarget)[this.type](this._options).data(this.type);if(!c.options.delay||!c.options.delay.show)return c.show();
clearTimeout(this.timeout);c.hoverState="in";this.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)},leave:function(a){var c=b(a.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!c.options.delay||!c.options.delay.hide)return c.hide();c.hoverState="out";this.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)},show:function(){var a,c,b,e,d,g,h;if(this.hasContent()&&this.enabled){a=this.tip();
this.setContent();this.options.animation&&a.addClass("fade");g="function"==typeof this.options.placement?this.options.placement.call(this,a[0],this.$element[0]):this.options.placement;c=/in/.test(g);a.detach().css({top:0,left:0,display:"block"}).insertAfter(this.$element);b=this.getPosition(c);e=a[0].offsetWidth;d=a[0].offsetHeight;switch(c?g.split(" ")[1]:g){case "bottom":h={top:b.top+b.height,left:b.left+b.width/2-e/2};break;case "top":h={top:b.top-d,left:b.left+b.width/2-e/2};break;case "left":h=
{top:b.top+b.height/2-d/2,left:b.left-e};break;case "right":h={top:b.top+b.height/2-d/2,left:b.left+b.width}}a.offset(h).addClass(g).addClass("in")}},setContent:function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b);a.removeClass("fade in top bottom left right")},hide:function(){var a=this.tip();a.removeClass("in");if(b.support.transition&&this.$tip.hasClass("fade")){var c=setTimeout(function(){a.off(b.support.transition.end).detach()},500);a.one(b.support.transition.end,
function(){clearTimeout(c);a.detach()})}else a.detach();return this},fixTitle:function(){var a=this.$element;if(a.attr("title")||"string"!=typeof a.attr("data-original-title"))a.attr("data-original-title",a.attr("title")||"").removeAttr("title")},hasContent:function(){return this.getTitle()},getPosition:function(a){return b.extend({},a?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var a=this.$element,b=this.options;
return a.attr("data-original-title")||("function"==typeof b.title?b.title.call(a[0]):b.title)},tip:function(){return this.$tip=this.$tip||b(this.options.template)},validate:function(){this.$element[0].parentNode||(this.hide(),this.options=this.$element=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(a){a=b(a.currentTarget)[this.type](this._options).data(this.type);a[a.tip().hasClass("in")?"hide":"show"]()},
destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var j=b.fn.tooltip;b.fn.tooltip=function(a){return this.each(function(){var c=b(this),f=c.data("tooltip"),e="object"==typeof a&&a;f||c.data("tooltip",f=new d(this,e));if("string"==typeof a)f[a]()})};b.fn.tooltip.Constructor=d;b.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",title:"",
delay:0,html:!1};b.fn.tooltip.noConflict=function(){b.fn.tooltip=j;return this}}(window.jQuery);

!function(a){var e=function(c,a){this.init("popover",c,a)};e.prototype=a.extend({},a.fn.tooltip.Constructor.prototype,{constructor:e,setContent:function(){var a=this.tip(),b=this.getTitle(),d=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b);a.find(".popover-content")[this.options.html?"html":"text"](d);a.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var a=this.$element,b=this.options;
return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},tip:function(){this.$tip||(this.$tip=a(this.options.template));return this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var f=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var b=a(this),d=b.data("popover"),f="object"==typeof c&&c;d||b.data("popover",d=new e(this,f));if("string"==typeof c)d[c]()})};a.fn.popover.Constructor=e;a.fn.popover.defaults=
a.extend({},a.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"></div></div></div>'});a.fn.popover.noConflict=function(){a.fn.popover=f;return this}}(window.jQuery);

!function(a){var g=function(b){a(b).on("click",'[data-dismiss="alert"]',this.close)};g.prototype.close=function(b){function e(){d.trigger("closed").remove()}var c=a(this),f=c.attr("data-target"),d;f||(f=(f=c.attr("href"))&&f.replace(/.*(?=#[^\s]*$)/,""));d=a(f);b&&b.preventDefault();d.length||(d=c.hasClass("alert")?c:c.parent());d.trigger(b=a.Event("close"));b.isDefaultPrevented()||(d.removeClass("in"),a.support.transition&&d.hasClass("fade")?d.on(a.support.transition.end,e):e())};var h=a.fn.alert;
a.fn.alert=function(b){return this.each(function(){var e=a(this),c=e.data("alert");c||e.data("alert",c=new g(this));"string"==typeof b&&c[b].call(e)})};a.fn.alert.Constructor=g;a.fn.alert.noConflict=function(){a.fn.alert=h;return this};a(document).on("click.alert.data-api",'[data-dismiss="alert"]',g.prototype.close)}(window.jQuery);

!function(b){var c=function(a,e){this.$element=b(a);this.options=b.extend({},b.fn.button.defaults,e)};c.prototype.setState=function(a){var b=this.$element,d=b.data(),c=b.is("input")?"val":"html";a+="Text";d.resetText||b.data("resetText",b[c]());b[c](d[a]||this.options[a]);setTimeout(function(){"loadingText"==a?b.addClass("disabled").attr("disabled","disabled"):b.removeClass("disabled").removeAttr("disabled")},0)};c.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons-radio"]');
a&&a.find(".active").removeClass("active");this.$element.toggleClass("active")};var f=b.fn.button;b.fn.button=function(a){return this.each(function(){var e=b(this),d=e.data("button"),f="object"==typeof a&&a;d||e.data("button",d=new c(this,f));"toggle"==a?d.toggle():a&&d.setState(a)})};b.fn.button.defaults={loadingText:"loading..."};b.fn.button.Constructor=c;b.fn.button.noConflict=function(){b.fn.button=f;return this};b(document).on("click.button.data-api","[data-toggle^=button]",function(a){a=b(a.target);
a.hasClass("btn")||(a=a.closest(".btn"));a.button("toggle")})}(window.jQuery);

!function(b){var f=function(a,c){this.$element=b(a);this.options=b.extend({},b.fn.collapse.defaults,c);this.options.parent&&(this.$parent=b(this.options.parent));this.options.toggle&&this.toggle()};f.prototype={constructor:f,dimension:function(){return this.$element.hasClass("width")?"width":"height"},show:function(){var a,c,d,e;if(!this.transitioning){a=this.dimension();c=b.camelCase(["scroll",a].join("-"));if((d=this.$parent&&this.$parent.find("> .accordion-group > .in"))&&d.length){if((e=d.data("collapse"))&&
e.transitioning)return;d.collapse("hide");e||d.data("collapse",null)}this.$element[a](0);this.transition("addClass",b.Event("show"),"shown");b.support.transition&&this.$element[a](this.$element[0][c])}},hide:function(){var a;this.transitioning||(a=this.dimension(),this.reset(this.$element[a]()),this.transition("removeClass",b.Event("hide"),"hidden"),this.$element[a](0))},reset:function(a){var b=this.dimension();this.$element.removeClass("collapse")[b](a||"auto")[0].offsetWidth;this.$element[null!==
a?"addClass":"removeClass"]("collapse");return this},transition:function(a,c,d){var e=this,f=function(){"show"==c.type&&e.reset();e.transitioning=0;e.$element.trigger(d)};this.$element.trigger(c);c.isDefaultPrevented()||(this.transitioning=1,this.$element[a]("in"),b.support.transition&&this.$element.hasClass("collapse")?this.$element.one(b.support.transition.end,f):f())},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var g=b.fn.collapse;b.fn.collapse=function(a){return this.each(function(){var c=
b(this),d=c.data("collapse"),e="object"==typeof a&&a;d||c.data("collapse",d=new f(this,e));if("string"==typeof a)d[a]()})};b.fn.collapse.defaults={toggle:!0};b.fn.collapse.Constructor=f;b.fn.collapse.noConflict=function(){b.fn.collapse=g;return this};b(document).on("click.collapse.data-api","[data-toggle=collapse]",function(a){var c=b(this),d;a=c.attr("data-target")||a.preventDefault()||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"");d=b(a).data("collapse")?"toggle":c.data();c[b(a).hasClass("in")?
"addClass":"removeClass"]("collapsed");b(a).collapse(d)})}(window.jQuery);

!function(b){var f=function(a,d){this.$element=b(a);this.options=d;"hover"==this.options.pause&&this.$element.on("mouseenter",b.proxy(this.pause,this)).on("mouseleave",b.proxy(this.cycle,this))};f.prototype={cycle:function(a){a||(this.paused=!1);this.options.interval&&!this.paused&&(this.interval=setInterval(b.proxy(this.next,this),this.options.interval));return this},to:function(a){var d=this.$element.find(".item.active"),e=d.parent().children(),d=e.index(d),c=this;if(!(a>e.length-1||0>a))return this.sliding?
this.$element.one("slid",function(){c.to(a)}):d==a?this.pause().cycle():this.slide(a>d?"next":"prev",b(e[a]))},pause:function(a){a||(this.paused=!0);this.$element.find(".next, .prev").length&&b.support.transition.end&&(this.$element.trigger(b.support.transition.end),this.cycle());clearInterval(this.interval);this.interval=null;return this},next:function(){if(!this.sliding)return this.slide("next")},prev:function(){if(!this.sliding)return this.slide("prev")},slide:function(a,d){var e=this.$element.find(".item.active"),
c=d||e[a](),h=this.interval,j="next"==a?"left":"right",g="next"==a?"first":"last",f=this;this.sliding=!0;h&&this.pause();c=c.length?c:this.$element.find(".item")[g]();g=b.Event("slide",{relatedTarget:c[0]});if(!c.hasClass("active")){if(b.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(g);if(g.isDefaultPrevented())return;c.addClass(a);c[0].offsetWidth;e.addClass(j);c.addClass(j);this.$element.one(b.support.transition.end,function(){c.removeClass([a,j].join(" ")).addClass("active");
e.removeClass(["active",j].join(" "));f.sliding=!1;setTimeout(function(){f.$element.trigger("slid")},0)})}else{this.$element.trigger(g);if(g.isDefaultPrevented())return;e.removeClass("active");c.addClass("active");this.sliding=!1;this.$element.trigger("slid")}h&&this.cycle();return this}}};var k=b.fn.carousel;b.fn.carousel=function(a){return this.each(function(){var d=b(this),e=d.data("carousel"),c=b.extend({},b.fn.carousel.defaults,"object"==typeof a&&a),h="string"==typeof a?a:c.slide;e||d.data("carousel",
e=new f(this,c));if("number"==typeof a)e.to(a);else if(h)e[h]();else c.interval&&e.cycle()})};b.fn.carousel.defaults={interval:5E3,pause:"hover"};b.fn.carousel.Constructor=f;b.fn.carousel.noConflict=function(){b.fn.carousel=k;return this};b(document).on("click.carousel.data-api","[data-slide]",function(a){var d=b(this),e,c=b(d.attr("data-target")||(e=d.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")),d=b.extend({},c.data(),d.data());c.carousel(d);a.preventDefault()})}(window.jQuery);

!function(b){var g=function(a,c){this.$element=b(a);this.options=b.extend({},b.fn.typeahead.defaults,c);this.matcher=this.options.matcher||this.matcher;this.sorter=this.options.sorter||this.sorter;this.highlighter=this.options.highlighter||this.highlighter;this.updater=this.options.updater||this.updater;this.source=this.options.source;this.$menu=b(this.options.menu);this.shown=!1;this.listen()};g.prototype={constructor:g,select:function(){var a=this.$menu.find(".active").attr("data-value");this.$element.val(this.updater(a)).change();
return this.hide()},updater:function(a){return a},show:function(){var a=b.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});this.$menu.insertAfter(this.$element).css({top:a.top+a.height,left:a.left}).show();this.shown=!0;return this},hide:function(){this.$menu.hide();this.shown=!1;return this},lookup:function(){var a;this.query=this.$element.val();return!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(a=b.isFunction(this.source)?this.source(this.query,
b.proxy(this.process,this)):this.source)?this.process(a):this},process:function(a){var c=this;a=b.grep(a,function(a){return c.matcher(a)});a=this.sorter(a);return!a.length?this.shown?this.hide():this:this.render(a.slice(0,this.options.items)).show()},matcher:function(a){return~a.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(a){for(var b=[],e=[],d=[],f;f=a.shift();)f.toLowerCase().indexOf(this.query.toLowerCase())?~f.indexOf(this.query)?e.push(f):d.push(f):b.push(f);return b.concat(e,
d)},highlighter:function(a){var b=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return a.replace(RegExp("("+b+")","ig"),function(a,b){return"<strong>"+b+"</strong>"})},render:function(a){var c=this;a=b(a).map(function(a,d){a=b(c.options.item).attr("data-value",d);a.find("a").html(c.highlighter(d));return a[0]});a.first().addClass("active");this.$menu.html(a);return this},next:function(){var a=this.$menu.find(".active").removeClass("active").next();a.length||(a=b(this.$menu.find("li")[0]));
a.addClass("active")},prev:function(){var a=this.$menu.find(".active").removeClass("active").prev();a.length||(a=this.$menu.find("li").last());a.addClass("active")},listen:function(){this.$element.on("blur",b.proxy(this.blur,this)).on("keypress",b.proxy(this.keypress,this)).on("keyup",b.proxy(this.keyup,this));if(this.eventSupported("keydown"))this.$element.on("keydown",b.proxy(this.keydown,this));this.$menu.on("click",b.proxy(this.click,this)).on("mouseenter","li",b.proxy(this.mouseenter,this))},
eventSupported:function(a){var b=a in this.$element;b||(this.$element.setAttribute(a,"return;"),b="function"===typeof this.$element[a]);return b},move:function(a){if(this.shown){switch(a.keyCode){case 9:case 13:case 27:a.preventDefault();break;case 38:a.preventDefault();this.prev();break;case 40:a.preventDefault(),this.next()}a.stopPropagation()}},keydown:function(a){this.suppressKeyPressRepeat=~b.inArray(a.keyCode,[40,38,9,13,27]);this.move(a)},keypress:function(a){this.suppressKeyPressRepeat||this.move(a)},
keyup:function(a){switch(a.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}a.stopPropagation();a.preventDefault()},blur:function(){var a=this;setTimeout(function(){a.hide()},150)},click:function(a){a.stopPropagation();a.preventDefault();this.select()},mouseenter:function(a){this.$menu.find(".active").removeClass("active");b(a.currentTarget).addClass("active")}};var h=
b.fn.typeahead;b.fn.typeahead=function(a){return this.each(function(){var c=b(this),e=c.data("typeahead"),d="object"==typeof a&&a;e||c.data("typeahead",e=new g(this,d));if("string"==typeof a)e[a]()})};b.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1};b.fn.typeahead.Constructor=g;b.fn.typeahead.noConflict=function(){b.fn.typeahead=h;return this};b(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',
function(a){var c=b(this);c.data("typeahead")||(a.preventDefault(),c.typeahead(c.data()))})}(window.jQuery);

!function(b){var d=function(a,c){this.$element=b(a);this.options=b.extend({},b.fn.collection.defaults,c);this.options.index=b("div"+this.options.collection_id+" .collection-item").length-1};d.prototype={constructor:d,add:function(){this.options.index+=1;var a=this.options.index;b.isFunction(this.options.addcheckfunc)&&!this.options.addcheckfunc()?b.isFunction(this.options.addfailedfunc)&&this.options.addfailedfunc():this.addPrototype(a)},addPrototype:function(a){a=b(this.options.collection_id).attr("data-prototype").replace(/__name__/g,
a);a=b(a);b("div"+this.options.collection_id+"> .controls").append(a);b(this.options.collection_id).trigger("add.mopa-collection-item",[a])},remove:function(){if(0!==this.$element.parents(".collection-item").length){var a=this.$element.closest(".collection-item");a.remove();b(this.options.collection_id).trigger("remove.mopa-collection-item",[a])}}};b.fn.collection=function(a){return this.each(function(){var c=b(this),f=c.data("collection-add-btn"),e=c.data("collection"),g="object"==typeof a?a:{};
g.collection_id=f?f:c.closest(".control-group").attr("id")?"#"+c.closest(".control-group").attr("id"):0===this.id.length?"":"#"+this.id;e||c.data("collection",e=new d(this,g));"add"==a&&e.add();"remove"==a&&e.remove()})};b.fn.collection.defaults={collection_id:null,addcheckfunc:!1,addfailedfunc:!1};b.fn.collection.Constructor=d;b(function(){b("body").on("click.collection.data-api","[data-collection-add-btn]",function(a){var c=b(a.target);c.hasClass("btn")||(c=c.closest(".btn"));c.collection("add");
a.preventDefault()});b("body").on("click.collection.data-api","[data-collection-remove-btn]",function(a){var c=b(a.target);c.hasClass("btn")||(c=c.closest(".btn"));c.collection("remove");a.preventDefault()})})}(window.jQuery);

$(document).scroll(function(){if($(".subnav").length){if(!$(".subnav").attr("data-top")){if($(".subnav").hasClass("subnav-fixed"))return;var a=$(".subnav").offset();$(".subnav").attr("data-top",a.top)}$(".subnav").attr("data-top")-$(".subnav").outerHeight()<=$(this).scrollTop()?$(".subnav").addClass("subnav-fixed"):$(".subnav").removeClass("subnav-fixed")}});
