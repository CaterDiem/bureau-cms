/* 
 * CMSPageCore
 * Core functionality for the Page and Block editor. 
 * 
 * Why's this called Core? Naming things sucks.
 * 
 * @author: jtemplet
 * @version: 0.1
 * @date: 2012/02/06
 */

var BLOCK_URI = '/web/app_dev.php/cms/page/blocks/';
var BLOCK_INSTANCE_URI = '/web/app_dev.php/cms/page/instances/';
var PAGE_URI = '/web/app_dev.php/cms/page/pages/';
var TEMPLATE_URI = '/web/app_dev.php/cms/page/templates/';

var SELECTOR_EDITABLE_HTML_BLOCKS = '[cms-block-type="HTML"][cms-block-editable]';
var SELECTOR_EDITABLE_LAYOUT_BLOCKS = '[cms-block-type="Layout"][cms-block-editable]';


var CMSPageCore = CMSPageCore || {
    // properties


    // functions
    init: function() {
        this.ui = CMSPageUI;
        //this.ui.initialise();

        this.rest = CMSPageRest;

        this.storage = CMSPageStorage;
        //this.storage.initialise();

    },
    // block functions   
    getBlock: function(blockID) {
        this.rest.get(
                BLOCK_URI + blockID,
                function(response) {
                    console.log(response);
                }
        );

    },
    getBlockInstance: function(blockInstanceID) {
        this.rest.get(
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
    // editor functions
    attachEditor: function(element) {
    }

};


CMSPageCore.init();
CMSPageCore.restoreLocallyStoredChanges();

// set the editor deactivation handler to store blocks in localstorage.
CMSPageCore.ui.setGlobalEditorDeactivationHandler(CMSPageCore.storeBlockChangesLocally);

// attach default toolbars
CMSPageCore.ui.attachDefaultToolbars();

console.log('READY PLAYER ONE!');