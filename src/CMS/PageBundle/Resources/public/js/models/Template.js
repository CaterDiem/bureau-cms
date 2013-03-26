/* 
 * Template
 * Model for template data
 * 
 * @author: jtemplet
 * @version: 0.1
 * @date: 2012/03/26
 */

var Template = Backbone.Model.extend({
    schema: {
        name: {type: 'Text', validators: ['required']},
        created: 'Date',
        updated: 'Date',        
        description: 'Text',        
    }
});