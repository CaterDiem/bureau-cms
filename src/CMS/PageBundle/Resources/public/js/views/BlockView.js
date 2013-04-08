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
    template: _.template($('[cms-template-for=block]').html()),
    
    events: {
      "mouseenter":  "showToolbar",
      "mouseleave": "hideToolbar",
      "click #clear-completed": "clearCompleted",
      "click #toggle-all": "toggleAllComplete"
    },
    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
    },
    render: function() {        
        this.$el.html(this.template({data: this.model.toJSON()}));
        CMSPageCore.debug.log("Rendering block: "+this.model.get('name')+this.model.get('id'));
        return this;
    },
    remove: function() {
        return this;
    },
            
    showToolbar: function() {
        this.$el.children('[cms-toolbar-type='+LAYOUT_TOOLBAR+']').show();
    },
    hideToolbar: function() {
        this.$el.children('[cms-toolbar-type='+LAYOUT_TOOLBAR+']').hide();
    },
            
});