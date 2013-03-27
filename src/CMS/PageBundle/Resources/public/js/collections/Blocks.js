/* 
 * Blocks
 * Collection of block models
 * 
 * @author: jtemplet
 * @version: 0.1
 * @date: 2012/03/21
 */

var Blocks = Backbone.Collection.extend({
    model: Block,
    localStorage: new Backbone.LocalStorage("CMSPageCore.blocks.BlocksCollection") 
});