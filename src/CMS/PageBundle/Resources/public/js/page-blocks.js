/* 
 * CMSPageBlocks
 * Local storage functionality for the Page and Block editor.  
 * 
 * @author: jtemplet
 * @version: 0.1
 * @date: 2012/02/19
 */

var BLOCK_ALL_BLOCKS = '[cms-block="true"]';
var BLOCK_ROOT = '[cms-root-block="true"]';
var BLOCK_TYPE_ROOT = 'Root';
var BLOCK_TYPE_LAYOUT = 'Layout';
var BLOCK_TYPE_HTML = 'HTML';


CMSPage.blocks = CMSPage.blocks|| {
    // properties
    BlockCollection: new BlockCollection(),
    init: function() {

        this.BlockCollection.fetch();
        this.populateInitialBlocksFromPage();
        return this;
    },
    // functions

    // load a block from the server-side backend. 
    getBlock: function(block, responseHandler) {
        CMSPage.rest.get(
                BLOCK_URI + '/' + block.id,
                function(response) {
                    // update the block. TODO: Should this be done here? I expect most of this stuff will move to backbone's events eventually.                    
                    var content = new Content(response.content);
                    block.set('savedContent', content);
                    //block.set(response);

                    // call responseHandler for further processing.
                    responseHandler(block);
                }
        );

    },
    getBlockInstance: function(blockInstanceID) {
        CMSPage.rest.get(
                BLOCK_INSTANCE_URI + '/' + blockInstanceID,
                function(data) {
                    $(".cms-page-editable").html(data.html);
                }
        );
    },
    // populate Blocks collection with initial blocks from the page. then attach a view for the block to the element
    populateInitialBlocksFromPage: function() {
        // fetch blocks from local storage
        //CMSPage.blocks.Blocollection.fetch();

        // populates the BlockCollection. if the block was readded to the page now, all layout blocks would remove their children and shit would go bad.
        $(BLOCK_ALL_BLOCKS).each(function() {
            block = CMSPage.blocks.determineBlock(this.id);
        });

        // now grab the rootblock and add it to the page.
        CMSPage.blocks.BlockCollection.forEach(function(aBlock) {
            //if( aBlock.get('type') !=)
            if (aBlock.get('type') == BLOCK_TYPE_ROOT) {
                CMSPage.blocks.addRootBlockToPage(aBlock);
            } else {
                CMSPage.blocks.addBlockToPage(aBlock);
            }
        });
    },
    determineBlock: function(target) {
        var block = $('#' + target);

        if (block.length > 0) {
            if (typeof CMSPage.blocks.BlockCollection.get({id: block.attr('cms-block-id')}) != 'undefined') {
                return CMSPage.blocks.BlockCollection.get({id: block.attr('cms-block-id')});
            }

            // first time a block is determined and doesn't exist in the BlockCollection it will be processed as a new block
            return CMSPage.blocks.addNewBlockFromPage(block);
        }

        return false;
    },
    addNewBlockFromPage: function(block) {
        CMSPage.debug.log('Processing:' + block.attr('cms-block-name'));
        var newBlock = new Block({
            id: block.attr('cms-block-id'),
            name: block.attr('cms-block-name'),
            type: block.attr('cms-block-type'),
            editable: block.attr('cms-block-editable'),
            element: block.attr('id')
        });

        CMSPage.debug.log('Adding block:' + newBlock.get('name') + ' to collection.')
        // add to collection and save so that parent<->child relationship doesn't do silly things later on.
        CMSPage.blocks.BlockCollection.add(newBlock);
        newBlock.save();

        if (newBlock.get('type') == (BLOCK_TYPE_LAYOUT || BLOCK_TYPE_ROOT)) {
            // for layout blocks don't set their contents as their contents, they're populated by their models.
            newBlock.set('content', '');
        } else {
            newBlock.set('content', block.children('[cms-content-for=' + block.attr('id') + ']').html());
        }

        // determine and set parent block.        
        if (block.attr('cms-root-block') != 'true') { // not the rootblock           
            parent = $("#" + newBlock.get('element')).parents('[cms-block]').first();

            parentBlock = CMSPage.blocks.determineBlock(parent.attr('id'));

            newBlock.setParent(parentBlock);
        }

        // save the new block 
        newBlock.save();

        return newBlock;
    },
    displayBlockInfo: function(block) {
        var form = new Backbone.Form({
            model: block
        }).render();
        return CMSPage.ui.showModalForm(form, block.get('name'));
    },
    // event handlers

    handleEvent: function(target, event, eventType) {
        // determine block details
        block = CMSPage.blocks.determineBlock(target);
        if (block) {
            var callback = CMSPage.blocks[event]; // fuck eval
            if (typeof callback === 'function') {
                CMSPage.debug.log(event + ' event for ' + block.get('name'));
                callback(block);
            } else {
                CMSPage.debug.log('No event handler for CMSPage.blocks.' + event);
            }
            return true;
        }
        CMSPage.debug.log('Undeterminable event. BlockCollection entry missing for block: ' + target);
        return false;
    },
    moveUp: function(block) {

    },
    moveDown: function(block) {

    },
    info: function(block) {
        CMSPage.blocks.getBlock(block, CMSPage.blocks.displayBlockInfo);

    },
    edit: function(block) {

    },
    add: function(block) {
        // add events only supported for LAYOUT blocks.
        // TODO: add events probably supported for some others later on, like galleries.
        if (block.get('type') != BLOCK_TYPE_LAYOUT) {
            CMSPage.debug.log('Add event called for block ' + block.get('id') + ':' + block.get('name') + ':' + block.get('type') + '. Block is not a ' + BLOCK_TYPE_LAYOUT + ' block');
            return false;
        }

        // create form to collect new block information
        newBlock = new Block();
        // add block as the parent
        newBlock.setParent(block);

        // create form based on the model, telling it to use the newBlockSchema instead of the standard block schema.
        newBlockForm = new Backbone.Form({
            model: newBlock,
            schema: newBlock.newBlockSchema
        }).render();

        return CMSPage.ui.showModalForm(newBlockForm, 'Add a new block', {
            confirm: function() {
                newBlockForm.commit();                
                CMSPage.blocks.BlockCollection.add(newBlockForm.model);
                newBlockForm.model.save();
                CMSPage.blocks.addBlockToPage(newBlockForm.model);
            }
        });
    },
    remove: function(block) {

    },
    addRootBlockToPage: function(block) {
        CMSPage.debug.log('Replacing rootblock:' + block.get('name') + ' on page.');
        newBlockView = new BlockView({model: block});

        $('#' + block.get('element')).replaceWith(newBlockView.render().el);
        newBlockView.delegateEvents();
        // now add its children                
        CMSPage.debug.log("Working with: ", block);
        block.get('children').forEach(CMSPage.blocks.addBlockToPage);
    },
    addBlockToPage: function(block) {

        CMSPage.debug.log("Working with: ", block);        

        var events = {};
        events[BLOCK_TOOLBAR_MOVE_UP] = {event: 'moveUp', type: 'click', callback: CMSPage.blocks.handleEvent};
        events[BLOCK_TOOLBAR_MOVE_DOWN] = {event: 'moveDown', type: 'click', callback: CMSPage.blocks.handleEvent};
        events[BLOCK_TOOLBAR_EDIT] = {event: 'edit', type: 'click', callback: CMSPage.blocks.handleEvent};
        events[BLOCK_TOOLBAR_INFO] = {event: 'info', type: 'click', callback: CMSPage.blocks.handleEvent};
        events[BLOCK_TOOLBAR_DELETE] = {event: 'remove', type: 'click', callback: CMSPage.blocks.handleEvent};

        if (block.get('type') == BLOCK_TYPE_LAYOUT) {
            events[BLOCK_TOOLBAR_ADD] = {event: 'add', type: 'click', callback: CMSPage.blocks.handleEvent};
        }
        // add event details to model for future use
        block.set('events', events);
        
        newBlockView = new BlockView({model: block});
        
        // if element exists, replace it. otherwise append it to the parent block.
        if ($('#' + block.get('element')).length > 0) {
            CMSPage.debug.log('Replacing block:' + block.get('name') + ' on page.');
            $('#' + block.get('element')).replaceWith(newBlockView.render().el);
        } else {            
            CMSPage.debug.log('Adding block:' + block.get('name') +
                    ' to page element: ' + block.get('parent').get('element'));
            $('#' + block.get('parent').get('element')).append(newBlockView.render().el);
        }
        newBlockView.delegateEvents();
        
        block.view = newBlockView; // not set() as this prevents object saving.
        
        // attach the toolbar
        toolbar = CMSPage.ui.attachToolbar(BLOCK_TOOLBAR, newBlockView.$el, block.get('element'), events);

        // now add its children

        if (block.get('children').length > 0) {
            block.get('children').forEach(CMSPage.blocks.addBlockToPage);
        }
    }
};


