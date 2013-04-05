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
    }
});