/* 
 * CMSPageBlocks
 * Local storage functionality for the Page and Block editor.  
 * 
 * @author: jtemplet
 * @version: 0.1
 * @date: 2012/02/19
 */

var BLOCK_ALL_BLOCKS = '[cms-block="true"]';
var BLOCK_TYPE_LAYOUT = 'Layout';
var BLOCK_TYPE_HTML = 'HTML';

var CMSPageBlocks = CMSPageBlocks ||{
    // properties
    BlockCollection: new Blocks(),
             
    // functions
    getBlock: function(block, responseHandler) {
        CMSPageCore.rest.get(
                BLOCK_URI + block.id,
                function(response) {
                    // update the block. TODO: Should this be done here? I expect most of this stuff will move to backbone's events eventually.                    
                    var content = new Content(response.content);
                    block.set('savedContent', content);                    
                    block.set(response);                                        
                    
                    // call responseHandler for further processing.
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
    // populate Blocks collection with initial blocks from the page.
    populateInitialModels: function(){
        $(BLOCK_ALL_BLOCKS).each(function(){
            CMSPageCore.blocks.BlockCollection.add( CMSPageCore.blocks.determineBlock(this.id) );
        });   
    },
    // callback function for storing changed block to localstorage
    storeBlockChangesLocally: function(editable) {
        editor = CMSPageCore.ui.getActiveEditorDetails(editable);      
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
        
        if( typeof CMSPageCore.blocks.BlockCollection.get({id: block.attr('cms-block-id')}) != 'undefined'){            
            return CMSPageCore.blocks.BlockCollection.get({id: block.attr('cms-block-id')});
        }
        
        // first time a block is determined this will happen. 
        var blockDetails = new Block({
            id: block.attr('cms-block-id'), 
            name: block.attr('cms-block-name'), 
            type: block.attr('cms-block-type'), 
            editable: block.attr('cms-block-editable')
        });
        
        // add to collection
        CMSPageCore.blocks.BlockCollection.add(blockDetails);
        
        return blockDetails;
    },
            
    showModalForm: function(form, title, events){
        $('#cms-modal .modal-body').html(form.el);
        $('#cms-modal #cms-modal-header').html(title);
        $('#cms-modal').modal();      
        for(var ev in events){
            CMSPageCore.debug.log(events[ev], ev, $('[cms-modal-button="'+ev+'"]'));
            $('[cms-modal-button="'+ev+'"]').unbind('click').one('click', function(){ events[ev](); $('#cms-modal').modal('hide');} );
        }
        
        return true;
    },
            
    displayBlockInfo: function(block){        
        var form = new Backbone.Form({
            model: block,            
        }).render();      
        return CMSPageCore.blocks.showModalForm(form, block.get('name'));        
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
    moveDown: function(block){
        
    },
    info: function(block){
        CMSPageCore.blocks.getBlock(block, CMSPageCore.blocks.displayBlockInfo);
        
    },
    edit: function(block){
    
    },
    add: function(block){
        // add events only supported for LAYOUT blocks.
        // TODO: add events probably supported for some others later on, like galleries.
        if(block.get('type') != BLOCK_TYPE_LAYOUT){
            CMSPageCore.debug.log('Add event called for block '+block.get('id')+':'+block.get('name')+':'+block.get('type')+'. Block is not a '+BLOCK_TYPE_LAYOUT+' block');
            return false;
        }        
        
        // create form to collect new block information
        newBlock = new Block();
        newBlock.set('parent', block);
        CMSPageCore.blocks.BlockCollection.add(newBlock);
        newBlockForm = new Backbone.Form({
            model: newBlock,
            schema: newBlock.newBlockSchema,            
            
        }).render();
        //newBlockForm.on('change')
        return CMSPageCore.blocks.showModalForm(newBlockForm, 'Add a new block', {confirm: function(){ CMSPageCore.debug.log('what'); newBlockForm.commit(); } });
        
    },
    remove: function(block){
    
    }
    
};