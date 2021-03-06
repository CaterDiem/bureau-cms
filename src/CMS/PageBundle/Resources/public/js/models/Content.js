/* 
 * Content
 * Model for content data
 * 
 * @author: jtemplet
 * @version: 0.1
 * @date: 2012/03/21
 */

var Content = Backbone.Model.extend({
    schema: {
        name: {type: 'Text', validators: ['required']},
        created: 'Date',
        updated: 'Date',
        editor: {model: 'User'},
        content: 'Text'
    }
});