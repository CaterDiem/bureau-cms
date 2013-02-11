/* 
 * CMSPageRest
 * RESTful functionality for the Page and Block editor. 
  * 
 * @author: jtemplet
 * @version: 0.1
 * @date: 2012/02/07
 */

var CMSPageRest = CMSPageRest || { 
    // properties
    
    
    // functions
    get: function (target){
        console.log("GETting "+target);
        
        var jqxhr = $.get(target)
            .done(function(response){
        
                return response;
            });
    },
        
    post: function (target, payload, options){ },
    put: function (target, payload, options){ },  
    remove: function(target, payload, options){ }
};
