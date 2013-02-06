/* 
 * CMSPageCore
 * Core functionality for the Page and Block editor. 
 * Probably UI too. Why's this called Core? Naming things sucks.
 * 
 * @author: jtemplet
 * @version: 0.1
 * @date: 2012/02/06
 */

var CMSPageCore = CMSPageCore || { 
    // properties
    
    
    // functions
    init: function() {},
            
    // block functions
    getBlock: function(block) { },
    saveBlock: function () { },
        
    // editor functions
    attachEditor:  function (block) { }
    
    
    
};

$(function(){
	$.ajaxSetup ({ cache: false });
        
	CMSPageCore.init();
});

