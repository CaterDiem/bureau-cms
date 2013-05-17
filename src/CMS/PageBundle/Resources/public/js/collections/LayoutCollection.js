/* 
 * LAyoutCollection
 * Collection of layout models
 * 
 * @author: jtemplet
 * @version: 0.1
 * @date: 2012/03/21
 */

var LayoutCollection = Backbone.Collection.extend({
    model: Layout,
    localStorage: new Backbone.LocalStorage("CMSPageCore.blocks.BlocksCollection"),
    comparator: 'sortOrder',
   
    initialize: function() {
        //this.fetch(); // load blocks from local storage.                  
    }
});

