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

 // default to production. 
var CMS_ENVIRONMENT = 'production';
var CMS_REST_BASE_URL = '/web/';
var CMS_DEBUG_STATE = '0';

var BLOCK_URI = 'cms/page/blocks/';
var BLOCK_INSTANCE_URI = 'cms/page/instances/';
var PAGE_URI = 'cms/page/pages/';
var TEMPLATE_URI = 'cms/page/templates/';

var SELECTOR_EDITABLE_HTML_BLOCKS = '[cms-block-type="HTML"][cms-block-editable]';
var SELECTOR_EDITABLE_LAYOUT_BLOCKS = '[cms-block-type="Layout"][cms-block-editable]';

var CMSPageCore = CMSPageCore || {
    // properties


    // functions
    init: function() {        
        // instantiate the core objects.
        // this will also set the environment to development if we're on a development url
        this.debug = CMSPageDebug.init();              
        this.ui = CMSPageUI;
        this.rest = CMSPageRest;
        this.storage = CMSPageStorage;      
        this.blocks = CMSPageBlocks;
               
        // init block things.
        //this.blocks.restoreLocallyStoredChanges();
        this.blocks.populateInitialBlocksFromPage();
                       
        // set the editor deactivation handler to store blocks in localstorage.
        this.ui.setGlobalEditorDeactivationHandler(CMSPageCore.blocks.storeBlockChangesLocally);


        this.debug.log('READY PLAYER ONE!');

    },
    
    // editor functions
    attachEditor: function(element) {
    }

};