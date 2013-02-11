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
        this.rest = CMSPageRest;
    },
            
    // block functions
    getBlock: function(blockID) {
        response = $.get(BLOCK_URI+blockID)
        .done(function(response){
            console.log(response);
        });
        
    },
    saveBlock: function () { },
        
    // editor functions
    attachEditor:  function (element) { }
        
        
};

$(function(){
	$.ajaxSetup ({ cache: false });
        
	CMSPageCore.init();        
});