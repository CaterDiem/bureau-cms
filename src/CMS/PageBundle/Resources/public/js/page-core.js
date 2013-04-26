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


(function( CMSPageCore, $, undefined ) {
    // properties

    // functions
    CMSPageCore.init = function() {        
        // instantiate the core objects.
        // this will also set the environment to development if we're on a development url
        this.debug = CMSPageDebug.init();              
        this.ui = CMSPageUI;
        this.rest = CMSPageRest;
        this.storage = CMSPageStorage;      
        this.blocks = CMSPageBlocks;
        this.pages = CMSPagePages;
                       
        // init block things.
        // ensure server-generated blocks are in the BlockCollection        
        this.blocks.init();
        
        // set the editor deactivation handler to store blocks in localstorage.
        this.ui.setGlobalEditorDeactivationHandler(CMSPageCore.blocks.storeBlockChangesLocally);

        this.debug.log('READY PLAYER ONE!');
        
        
    };
    
    // editor functions
    CMSPageCore.attachEditor = function(element) {};

}( window.CMSPageCore = window.CMSPageCore || {}, jQuery));

