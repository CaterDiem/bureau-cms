!function(b){var d=function(a,c){this.$element=b(a);this.options=b.extend({},b.fn.collection.defaults,c);this.options.index=b("div"+this.options.collection_id+" .collection-item").length-1};d.prototype={constructor:d,add:function(){this.options.index+=1;var a=this.options.index;b.isFunction(this.options.addcheckfunc)&&!this.options.addcheckfunc()?b.isFunction(this.options.addfailedfunc)&&this.options.addfailedfunc():this.addPrototype(a)},addPrototype:function(a){a=b(this.options.collection_id).attr("data-prototype").replace(/__name__/g,
a);a=b(a);b("div"+this.options.collection_id+"> .controls").append(a);b(this.options.collection_id).trigger("add.mopa-collection-item",[a])},remove:function(){if(0!==this.$element.parents(".collection-item").length){var a=this.$element.closest(".collection-item");a.remove();b(this.options.collection_id).trigger("remove.mopa-collection-item",[a])}}};b.fn.collection=function(a){return this.each(function(){var c=b(this),f=c.data("collection-add-btn"),e=c.data("collection"),g="object"==typeof a?a:{};
g.collection_id=f?f:c.closest(".control-group").attr("id")?"#"+c.closest(".control-group").attr("id"):0===this.id.length?"":"#"+this.id;e||c.data("collection",e=new d(this,g));"add"==a&&e.add();"remove"==a&&e.remove()})};b.fn.collection.defaults={collection_id:null,addcheckfunc:!1,addfailedfunc:!1};b.fn.collection.Constructor=d;b(function(){b("body").on("click.collection.data-api","[data-collection-add-btn]",function(a){var c=b(a.target);c.hasClass("btn")||(c=c.closest(".btn"));c.collection("add");
a.preventDefault()});b("body").on("click.collection.data-api","[data-collection-remove-btn]",function(a){var c=b(a.target);c.hasClass("btn")||(c=c.closest(".btn"));c.collection("remove");a.preventDefault()})})}(window.jQuery);