/* 
 * CMSPageBlocks
 * Local storage functionality for the Page and Block editor.  
 * 
 * @author: jtemplet
 * @version: 0.1
 * @date: 2012/02/19
 */

var BLOCK_TYPE_LAYOUT = 'Layout';
var BLOCK_TYPE_HTML = 'HTML';

var CMSPageBlocks = CMSPageBlocks ||{
    // properties
    
    // functions
    getBlock: function(block, responseHandler) {
        CMSPageCore.rest.get(
                BLOCK_URI + block.id,
                function(response) {
                    var content = new Content(response.content);
                    block.set(response);
                    block.set('content', content);
                    responseHandler(block);
                }
        );

    },
    getBlockInstance: function(blockInstanceID) {
        CMSPageCore.rest.get(
                BLOCK_INSTANCE_URI + blockInstanceID,
                function(data) {
                    $(".cms-page-editable").html(data.html);
                    CMSPageCore.debug.log(data);
                }
        );
    },
    // callback function for storing changed block to localstorage
    storeBlockChangesLocally: function(editable) {
        editor = CMSPageCore.ui.getActiveEditorDetails(editable);
        CMSPageCore.debug.log(editor);
        CMSPageCore.storage.put(editor.elementId, editor.content);
    },
    restoreLocallyStoredChanges: function() {
        $(SELECTOR_EDITABLE_HTML_BLOCKS).each(function() {
            blockContents = CMSPageCore.storage.get($(this).attr('id'));
            if (blockContents != null) {
                $(this).html(blockContents);
            }

        });
    },
            
    determineBlock: function(target){
        var block = $('#'+target);
        var blockDetails = new Block({
            id: block.attr('cms-block-id'), 
            name: block.attr('cms-block-name'), 
            type: block.attr('cms-block-type'), 
            editable: block.attr('cms-block-editable')
        });
        return blockDetails;
    },
            
    displayBlockInfo: function(block){        
        CMSPageCore.debug.log(block);
    },
    
    // event handlers
    
    handleEvent: function(target, event, eventType){        
        // determine block details
        block = CMSPageCore.blocks.determineBlock(target);        
        
        var callback = CMSPageCore.blocks[event]; // fuck eval
        if(typeof callback === 'function') {
            CMSPageCore.debug.log(event+' event for '+block.get('name'));
            callback(block);
        }else{
            CMSPageCore.debug.log('No event handler for CMSPageCore.blocks.'+event);
        }
 
    },
    
    moveUp: function(block){
        
    },
    moveDown: function(target){
        
    },
    info: function(block){
        CMSPageCore.blocks.getBlock(block, CMSPageCore.blocks.displayBlockInfo);
        
    },
    edit: function(block){
    
    },
    add: function(block){
        // add events only supported for LAYOUT blocks.
        // TODO: add events probably supported for some others later on, like galleries.
        if(block.type != BLOCK_TYPE_LAYOUT){
            CMSPageCore.debug.log('Add event called for block '+block.id+':'+block.name+':'+block.type+'. Block is not a '+BLOCK_TYPE_LAYOUT+' block');
            return false;
        }        
        
    },
    remove: function(block){
    
    }
    
};