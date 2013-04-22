/* 
 * Page
 * Model for page data
 * 
 * @author: jtemplet
 * @version: 0.1
 * @date: 2012/03/21
 */

var Page = Backbone.Model.extend({
     schema: {
        name: {type: 'Text', validators: ['required']},
        created: 'Date',
        updated: 'Date',
        slug: {model: 'Content'},                        
    },
    defaults: {        
    },    
    newPageSchema: {
        name: {type: 'Text', validators: ['required']},
        slug: {type: 'Text', validators: ['required']},        
    }
});