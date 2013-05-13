/* 
 * CMSPageDebug
 * Debug and logging and so forth
 * 
 * @author: jtemplet
 * @version: 0.1
 * @date: 2012/03/29
 */

CMSPage.debug = CMSPage.debug || {
    // properties


    // functions
    init: function() {
        this.processEnvironmentState();
        return this;
    },
                           
    log: function() {        
        if(CMS_DEBUG_STATE == '1'){
            for(var i=0; i<arguments.length; i++){
                console.log(arguments[i]);
            }
        }else{
            return false;
        }
        
    },
            
    processEnvironmentState: function(){        
        // check the values of CMS_ENVIRONMENT and CMS_DEBUG_STATE and do things
        if(CMS_ENVIRONMENT == 'dev' || CMS_ENVIRONMENT == 'test'){
            CMS_REST_BASE_URL = '/web/app_dev.php/';            
        }
        
        if(CMS_ENVIRONMENT == 'prod'){
            CMS_REST_BASE_URL = '/web/';
        }     
    }
};