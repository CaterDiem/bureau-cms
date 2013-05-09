/* 
 * Block
 * View for block data
 * 
 * @author: jtemplet
 * @version: 0.1
 * @date: 2012/03/21
 */

var BlockView = Backbone.View.extend({
    //tagName: 'data-cms-block',
    tagName: 'div',
    
    events: {
      "mouseenter":  "setActive",
      "mouseleave": "setInactive",      
      "blur .block-content" : "storeContentChanges"
    },
    initialize: function() {
        //this.setElement(this.el);
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
        this.template = _.template($('[cms-template-for="'+this.model.get('type').toLowerCase()+'"]').html())
    },
    render: function() {        
        CMSPageCore.debug.log('Rendering: '+this.model.get('name'));
        
        // element needs triming for whitespace, unless you enjoy syntax errors.
        element = $.trim(this.template({data: this.model.toJSON()}));        
        this.setElement(element);
        //this.$el.html(element);  
        return this;
    },
    remove: function() {
        return this;
    },
            
    setActive: function() {
        //CMSPageCore.debug.log(this.model.get('name')+': now active');
        this.$el.children('[cms-toolbar-type='+BLOCK_TOOLBAR+']').show();        
        if(this.model.get('type') != BLOCK_TYPE_ROOT){
            this.$el.addClass('cms-block-active');
        }
    },
    setInactive: function() {
        //CMSPageCore.debug.log(this.model.get('name')+': now inactive');        
        
        this.$el.children('[cms-toolbar-type='+BLOCK_TOOLBAR+']').hide();
        if(this.model.get('type') != BLOCK_TYPE_ROOT){
            this.$el.removeClass('cms-block-active');
        }
    },
    storeContentChanges: function() {               
        this.model.set('content', this.$el.find('.block-content').html());
        this.model.save();
    }
            
});