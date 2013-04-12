/* 
 * Block
 * Model for block data
 * 
 * @author: jtemplet
 * @version: 0.1
 * @date: 2012/03/21
 */

var Block = Backbone.Model.extend({
    schema: {
        name: {type: 'Text', validators: ['required']},
        created: 'Date',
        updated: 'Date',
        content: {model: 'Content'},
        description: 'Text',
        blockTemplate: {model: 'Template'}, // note that this actually lives in blockInstance in the DB. haxx!        
    },
    defaults: {
        name: '',
        content: 'Insert content here.',
        description: '',
        blockTemplate: 'plainHTML',
        cssClasses: '',
        urlname: '',
        type: 'html',
        editable: 'true',
    },
    newBlockSchema: {
        name: {type: 'Text', validators: ['required']},
        description: 'Text',
        blockTemplate: {model: 'Template'} // note that this actually lives in blockInstance in the DB. haxx!
    },    
    initialize: function() {

        //var self = this;
        this.set('parent', new BlockCollection(this.get('parent')));
        this.set('children', new BlockCollection(this.get('children')));
        this.on('sync', this.onSync);
        //this.on('change:parent', this.parentAdded, this);
        //this.on('change:child', this.childAdded, this);
    },
    onSync: function() {
        // backbone.localStorage (on the collection) saving/sync turns our two collections into arrays as they're serialized. we still want these as collections, so undo that.        
        this.set('parent', new BlockCollection(this.get('parent')));
        this.set('children', new BlockCollection(this.get('children')));
    },
    setParent: function(parent){
        // this ensures the parent block recognises this as a child block to this block        
        CMSPageCore.debug.log('Block: ' + this.get('name') + ' parent set to: ' + parent.get('name') + '. Adding block as child to parent.');        
        this.get('parent').set(parent);
        //parent.get('children').add(this);
        
        return this;
    }
});