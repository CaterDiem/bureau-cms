/* 
 * Block
 * View for block data
 * 
 * @author: jtemplet
 * @version: 0.1
 * @date: 2012/03/21
 */

var BlockView = Backbone.View.extend({
    tag: 'div',
    
    events: {
      "mouseenter":  "setActive",
      "mouseleave": "setInactive",      
      "blur .block-content" : "storeContentChanges"
    },
    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
        this.template = _.template($('[cms-template-for="'+this.model.get('type').toLowerCase()+'"]').html())
    },
    render: function() {        
        this.$el.html(this.template({data: this.model.toJSON()}));        
        return this;
    },
    remove: function() {
        return this;
    },
            
    setActive: function() {
        //CMSPageCore.debug.log(this.model.get('name')+': now active');
        this.$el.find('[cms-toolbar-type='+LAYOUT_TOOLBAR+']').show();
        this.$el.addClass('cms-block-active');
    },
    setInactive: function() {
        //CMSPageCore.debug.log(this.model.get('name')+': now inactive');        
        this.$el.find('[cms-toolbar-type='+LAYOUT_TOOLBAR+']').hide();
        this.$el.removeClass('cms-block-active');
    },
    storeContentChanges: function() {               
        this.model.set('content', this.$el.find('.block-content').html());
        this.model.save();
    }
            
});