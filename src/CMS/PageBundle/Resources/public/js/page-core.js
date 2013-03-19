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
        
        this.blocks = CMSPageBlocks;

    },
    
    // editor functions
    attachEditor: function(element) {
    }

};


CMSPageCore.init();
CMSPageCore.blocks.restoreLocallyStoredChanges();

// set the editor deactivation handler to store blocks in localstorage.
CMSPageCore.ui.setGlobalEditorDeactivationHandler(CMSPageCore.blocks.storeBlockChangesLocally);

// attach default toolbars
CMSPageCore.ui.attachDefaultToolbars();

console.log('READY PLAYER ONE!');