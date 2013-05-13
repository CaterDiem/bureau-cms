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
            deepCloneable: true,
            reverseRelation: {
                key: 'parent',
                includeInJSON: 'id',
            
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
    onSync: function() {

    },
    /**
     * Create a new model with identical attributes to this one.
     * Clones relationships that are defined in the deepCloneableRelations array.     
     * @returns the deep clone
     */
    clone: function() {
        var clone = Backbone.RelationalModel.prototype.clone.apply(this);

        for (var attribute in this.attributes) {
            // if this attribute is set as deepCloneable, process it.
            if (this.getRelation(attribute) && this.getRelation(attribute).options.deepCloneable) {
                var value = this.attributes[attribute];

                // this deals with all hasOne relations
                if (value && value instanceof Backbone.Model) {
                    clone.attributes[attribute] = value.clone();
                }

                // this deals with all hasMany relations
                if (value && value instanceof Backbone.Collection) {
                    value.each(function(model) {
                        clone.get(attribute).add(model.clone());
                    });
                }
            }
        }
        // Block specific things.       
        // change the name
        clone.set('name', clone.get('name') + '-clone');

        // unset the element, and regenerate
        clone.unset('element');
        clone.generateElementId();

        return clone;
    },
    generateElementId: function() {
        //if (this.get('element') == null) {
            var id = this.get('id');
            if (id == null) {
                id = this.cid;
            }
            elementId = this.get('name') + "-" + id;
            this.set('element', elementId);
        //}
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
