/** 
 * Layout
 * Model for layout data. Might be superfluous, as a layout is just blocks anyway.
 * 
 * @author: jtemplet
 * @version: 0.1
 * @date: 2012/03/21
 */

var Layout = Backbone.Model.extend({
    
    initialize: function() {        
        this.set('parent', new BlockCollection(this.get('parent')));
        this.set('children', new BlockCollection(this.get('children')));
        this.on('sync', this.onSync);        
    },
    onSync: function() {
        // backbone.localStorage (on the collection) saving/sync turns our two collections into arrays as they're serialized. we still want these as collections, so undo that.        
        this.set('parent', new BlockCollection(this.get('parent')));
        this.set('children', new BlockCollection(this.get('children')));
    }
});