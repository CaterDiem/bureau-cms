/* 
 * CMSPageBlocks
 * Local storage functionality for the Page and Block editor.  
 * 
 * @author: jtemplet
 * @version: 0.1
 * @date: 2012/02/19
 */

var CMSPageBlocks = CMSPageBlocks || {
    // properties
    
    // functions
    getBlock: function(blockID) {
        CMSPageCore.rest.get(
                BLOCK_URI + blockID,
                function(response) {
                    console.log(response);
                }
        );

    },
    getBlockInstance: function(blockInstanceID) {
        CMSPageCore.rest.get(
                BLOCK_INSTANCE_URI + blockInstanceID,
                function(data) {
                    $(".cms-page-editable").html(data.html);
                    console.log(data);
                }
        );
    },
    // callback function for storing changed block to localstorage
    storeBlockChangesLocally: function(editable) {
        editor = CMSPageCore.ui.getActiveEditorDetails(editable);
        console.log(editor);
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
    
    // event handlers
    
    handleEvent: function(target, event, eventType){
        console.log(target, event, eventType);
    },
    eventMoveUp: function(){

    },
};
