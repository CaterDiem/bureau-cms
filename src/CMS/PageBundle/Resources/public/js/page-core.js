/* 
 * CMSPage
 * Core functionality for the Page and Block editor. 
 * 
 * Why's this called Core? Naming things sucks.
 * 
 * @author: jtemplet
 * @version: 0.1
 * @date: 2012/02/06
 */


var CMSPage = CMSPage || {
    // properties

    // functions
    init: function() {        
        // instantiate the core objects.
        // 
        // this will also set the environment to development if we're on a development url
        this.debug.init();
        
        // init block things.
        // ensure server-generated blocks are in the BlockCollection                
        this.blocks.init();
        
        // set the editor deactivation handler to store blocks in localstorage.
        this.ui.setGlobalEditorDeactivationHandler(CMSPage.blocks.storeBlockChangesLocally);

        this.debug.log('READY PLAYER ONE!');
        
        
    },
    
    // editor functions
    attachEditor: function(element) {},

}

