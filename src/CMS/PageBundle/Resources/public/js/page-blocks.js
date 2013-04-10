/* 
 * CMSPageBlocks
 * Local storage functionality for the Page and Block editor.  
 * 
 * @author: jtemplet
 * @version: 0.1
 * @date: 2012/02/19
 */

var BLOCK_ALL_BLOCKS = '[cms-block="true"]';
var BLOCK_TYPE_ROOT = 'Root';
var BLOCK_TYPE_LAYOUT = 'Layout';
var BLOCK_TYPE_HTML = 'HTML';

var CMSPageBlocks = CMSPageBlocks || {
    // properties
    BlockCollection: new BlockCollection(),
      
            
    init: function() {
        this.populateInitialBlocksFromPage();                
        return this;
    },            
    // functions

    // load a block from the server-side backend. 
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
                }
        );
    },
    // populate Blocks collection with initial blocks from the page. then attach a view for the block to the element
    populateInitialBlocksFromPage: function() {
        // fetch blocks from local storage
        CMSPageCore.blocks.BlockCollection.fetch();
        
        // this loops through each twice. first time populates the BlockCollection. if the block was readded to the page now, all layout blocks would remove their children and shit would go bad.
        $(BLOCK_ALL_BLOCKS).each(function() {
            block = CMSPageCore.blocks.determineBlock(this.id);            
        });
        
        // second time adds it to the page.
        $(BLOCK_ALL_BLOCKS).each(function() {
            
            if ($(this).attr('cms-root-block') == 'true') {                
                console.log(CMSPageCore.blocks.determineBlock(this.id));
                CMSPageCore.blocks.addChildBlocksToPage(CMSPageCore.blocks.determineBlock(this.id));
            }
            
            if ($(this).attr('cms-root-block') != 'true') { // not the rootblock           
                CMSPageCore.debug.log('Replacing: '+$(this).attr('cms-block-name')+'');
                //$(this).remove();
                CMSPageCore.blocks.addBlockToPage(block);
            }
        });

    },
            
    // add all child blocks from the collection to the page.
    // TODO: this might need to be refactored if the way blocks are stored to pages change on the server
    addChildBlocksToPage: function(block){
        block.get('children').forEach(CMSPageCore.blocks.addBlockToPage);
    },
            
    determineBlock: function(target) {        
        var block = $('#' + target);
        if(block.length > 0){
            if (typeof CMSPageCore.blocks.BlockCollection.get({id: block.attr('cms-block-id')}) != 'undefined') {
                return CMSPageCore.blocks.BlockCollection.get({id: block.attr('cms-block-id')});
            }

            // first time a block is determined and doesn't exist in the BlockCollection it will be processed as a new block
            return CMSPageCore.blocks.addNewBlockFromPage(block);
        }

        return false;
    },
    addNewBlockFromPage: function(block) {
        CMSPageCore.debug.log('Processing:'+block.attr('cms-block-name'));
        var newBlock = new Block({
            id: block.attr('cms-block-id'),
            name: block.attr('cms-block-name'),
            type: block.attr('cms-block-type'),
            editable: block.attr('cms-block-editable'),            
            element: block.attr('id')
        });

        CMSPageCore.debug.log('Adding block:'+newBlock.get('name')+' to collection.')

        if (newBlock.get('type') == (BLOCK_TYPE_LAYOUT || BLOCK_TYPE_ROOT) ) {
            // for layout blocks don't set their contents as their contents, they're populated by their models.
            newBlock.set('content', '');
        } else {
            newBlock.set('content', block.children('[cms-content-for=' + block.attr('id') + ']').html());
        }        

        // determine and set parent block.        
        if (block.attr('cms-root-block') != 'true') { // not the rootblock           
            parent = $("#" + newBlock.get('element')).parents('[cms-block]').first();

            parentBlock = CMSPageCore.blocks.determineBlock(parent.attr('id'));
            console.log(parentBlock);
            newBlock.get('parent').set(parentBlock);
        }

        // add to collection
        CMSPageCore.blocks.BlockCollection.add(newBlock);
        newBlock.save();

        return newBlock;
    },
    showModalForm: function(form, title, events) {
        $('#cms-modal .modal-body').html(form.el);
        $('#cms-modal #cms-modal-header').html(title);
        $('#cms-modal').modal();
        for (var ev in events) {            
            $('[cms-modal-button="' + ev + '"]').unbind('click').one('click', function() {
                events[ev]();
                $('#cms-modal').modal('hide');
            });
        }

        return true;
    },
    displayBlockInfo: function(block) {
        var form = new Backbone.Form({
            model: block,
        }).render();
        return CMSPageCore.blocks.showModalForm(form, block.get('name'));
    },
    // event handlers

    handleEvent: function(target, event, eventType) {
        // determine block details
        block = CMSPageCore.blocks.determineBlock(target);
        if(block){
            var callback = CMSPageCore.blocks[event]; // fuck eval
            if (typeof callback === 'function') {
                CMSPageCore.debug.log(event + ' event for ' + block.get('name'));
                callback(block);
            } else {
                CMSPageCore.debug.log('No event handler for CMSPageCore.blocks.' + event);
            }
            return true;
        }
        CMSPageCore.debug.log('Undeterminable event. BlockCollection entry missing for block: '+target);
        return false;
    },
    moveUp: function(block) {

    },
    moveDown: function(block) {

    },
    info: function(block) {
        CMSPageCore.blocks.getBlock(block, CMSPageCore.blocks.displayBlockInfo);

    },
    edit: function(block) {

    },
    add: function(block) {
        // add events only supported for LAYOUT blocks.
        // TODO: add events probably supported for some others later on, like galleries.
        if (block.get('type') != BLOCK_TYPE_LAYOUT) {
            CMSPageCore.debug.log('Add event called for block ' + block.get('id') + ':' + block.get('name') + ':' + block.get('type') + '. Block is not a ' + BLOCK_TYPE_LAYOUT + ' block');
            return false;
        }

        // create form to collect new block information
        newBlock = new Block();
        // add block as the parent
        newBlock.get('parent').set(block);        
        CMSPageCore.blocks.BlockCollection.add(newBlock);
        
        // create form based on the model, telling it to use the newBlockSchema instead of the standard block schema.
        newBlockForm = new Backbone.Form({
            model: newBlock,
            schema: newBlock.newBlockSchema,
        }).render();
               
        return CMSPageCore.blocks.showModalForm(newBlockForm, 'Add a new block', {
            confirm: function() {
                newBlockForm.commit();
                CMSPageCore.blocks.addBlockToPage(newBlockForm.model);
            }
        });
    },
    remove: function(block) {

    },
    addBlockToPage: function(block) {
        CMSPageCore.debug.log(block);
        CMSPageCore.debug.log('Adding block:' + block.get('name') +
                ' to page element: ' + block.get('parent').first().get('element'));

        newBlockView = new BlockView({model: block});
        // if element exists, replace it. otherwise append it to the parent block.
        if($('#' + block.get('element')).length > 0){
            $('#' + block.get('element')).replaceWith(newBlockView.render().el);
        }else{
            $('#' + block.get('parent').first().get('element')).append(newBlockView.render().el);
        }
        
        console.log(newBlockView.$el.html());
        
        var events = {};
        events[LAYOUT_TOOLBAR_MOVE_UP] = {event: 'moveUp', type: 'click', callback: CMSPageCore.blocks.handleEvent};
        events[LAYOUT_TOOLBAR_MOVE_DOWN] = {event: 'moveDown', type: 'click', callback: CMSPageCore.blocks.handleEvent};

        toolbar = CMSPageCore.ui.attachToolbar(LAYOUT_TOOLBAR, newBlockView.$el, block.get('element'), events);

        // attach popup toolbar
        var popupEvents = {};
        
        popupEvents[MORE_OPTIONS_EDIT] = {event: 'edit', type: 'click', callback: CMSPageCore.blocks.handleEvent};
        popupEvents[MORE_OPTIONS_INFO] = {event: 'info', type: 'click', callback: CMSPageCore.blocks.handleEvent};
        popupEvents[MORE_OPTIONS_DELETE] = {event: 'remove', type: 'click', callback: CMSPageCore.blocks.handleEvent};

        popupToolbar = CMSPageCore.ui.attachPopupToolbar(EDITABLE_BLOCK_TOOLBAR_POPUP, toolbar.children(LAYOUT_TOOLBAR_MORE_OPTIONS_BUTTON), toolbar.attr('cms-toolbar-target'), popupEvents);
        
        // now add its children
        block.get('children').forEach(CMSPageCore.blocks.addBlockToPage);
    }
};