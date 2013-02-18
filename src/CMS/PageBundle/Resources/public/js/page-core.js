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

require([
    'web/bundles/cmspage/js/page-ui',
    'web/bundles/cmspage/js/page-rest'
]);

var CMSPageCore = CMSPageCore || { 
    // properties
    
    
    // functions
    init: function() {
        this.ui = CMSPageUI;
        this.ui.initialise();
        
        this.rest = CMSPageRest;
        
    },
            
    // block functions   
    getBlock: function(blockID) {        
        this.rest.get(
            BLOCK_URI+blockID, 
            function(response){
                console.log(response);
            }
        );            
        
    },
        
    getBlockInstance: function(blockInstanceID) {
        this.rest.get(
            BLOCK_INSTANCE_URI+blockInstanceID, 
            function(data){        
                $(".cms-page-editable").html(data.html);
                console.log(data);
            }
        );
    },

    saveBlock: function () { },
        
    // editor functions
    attachEditor:  function (element) { }
        
        
};

$(function(){
	$.ajaxSetup ({ cache: false });
        
	CMSPageCore.init();        
});