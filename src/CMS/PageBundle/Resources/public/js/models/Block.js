/** 
 * Block
 * Model for block data
 * 
 * @author: jtemplet
 * @version: 0.1
 * @date: 2012/03/21
 */

var Block = Backbone.RelationalModel.extend({
    relations: [{
            type: Backbone.HasMany,
            key: 'children',
            relatedModel: 'Block',
            collectionType: 'BlockCollection',
            reverseRelation: {
                key: 'parent',
                includeInJSON: 'id'
            }
        }],    
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
        content: 'block',
        description: '',
        blockTemplate: 'plainHTML',
        cssClasses: '',
        urlname: '',
        type: 'html',
        editable: 'true',
        element: null,
        sortOrder: 0
    },
    newBlockSchema: {
        name: {type: 'Text', validators: ['required']},
        description: 'Text',
        blockTemplate: {model: 'Template'} // note that this actually lives in blockInstance in the DB. haxx!
    },
    initialize: function(options) {        
        //this.on('sync', this.onSync);
    },
    onSync: function(){
        
    },
    generateElementId: function(){
        if(this.get('element') == null){            
            elementId = this.get('name')+"-"+this.get('id');
            this.set('element', elementId);
        }                
        return this;
    },
    /**
     * this ensures the parent block recognises this as a child block to this block.
     * @todo: refactor this to not be required. now that this is a relational model this is simple.
     */
    setParent: function(parent) {
        // this ensures the parent block recognises this as a child block to this block.
        // 
       
        CMSPageCore.debug.log('Block: ' + this.get('name') + ' parent set to: ' + parent.get('name') + '. Adding block as child to parent.');
        
        this.set('parent', parent);
        return this;
    }
});
