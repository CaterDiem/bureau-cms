/** 
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
        sortOrder: 'Number',
        blockTemplate: {model: 'Template'} // note that this actually lives in blockInstance in the DB. haxx!        
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
        sortOrder: 0       
    },
    newBlockSchema: {
        name: {type: 'Text', validators: ['required']},
        description: 'Text',
        blockTemplate: {model: 'Template'} // note that this actually lives in blockInstance in the DB. haxx!
    },    
    initialize: function(options) {

        //var self = this;        
        this.parent = null;
        this.set('parent', parent);
        this.children = new BlockCollection();
        this.set('children', this.children);        
        this.on('sync', this.onSync);
        //this.on('change:parent', this.parentAdded, this);
        //this.on('change:child', this.childAdded, this);
    },
    parse: function(res){
        console.log(res, this);
        res.parent && this.parent; 
        res.children && this.children.reset(res.children);
        return res;
    },
    onSync: function() {
        // backbone.localStorage (on the collection) saving/sync turns our two collections into arrays as they're serialized. we still want these as collections, so undo that.        
        
        this.parent = this.parent;//.reset(this.parent);
        //this.children = this.children.reset(this.children);
    },
    setParent: function(parent){
        // this ensures the parent block recognises this as a child block to this block        
        CMSPageCore.debug.log('Block: ' + this.get('name') + ' parent set to: ' + parent.get('name') + '. Adding block as child to parent.');        
        this.parent = parent;
        this.set('parent', parent);
        parent.children.add(this);  // this causes the object to be persisted to the parent's blockcollection before it's in the global one. then it's not stored properly enough for shit.
        parent.get('children').add(this);
        parent.save();
        console.log(this);
        return this;
    }    
});