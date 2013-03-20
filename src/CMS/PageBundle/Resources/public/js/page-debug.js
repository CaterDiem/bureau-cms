/* 
 * CMSPageDebug
 * Debug and logging and so forth
 * 
 * @author: jtemplet
 * @version: 0.1
 * @date: 2012/03/29
 */

var CMS_ENVIRONMENT_CHECKER_URL = '/';

var CMSPageDebug = CMSPageDebug|| {
    // properties


    // functions
    init: function() {
        CMS_ENVIRONMENT = CMSPageCore.debug.getEnvironmentState();
    },
                           
    log: function(message) {        
        if(CMS_ENVIRONMENT == 'development'){
            console.log(message);
        }else{
            return false;
        }
        
    },
            
    getEnvironmentState: function(){
        /*CMSPageCore.rest.get(
                CMS_ENVIRONMENT_CHECKER_URL,
                function(data) {
                    $(".cms-page-editable").html(data.html);
                    CMSPageCore.debug.log(data);
                }
        );*/
        return 'development';
    }
};