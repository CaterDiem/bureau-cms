/* 
 * CMSPageStorage
 * Local storage functionality for the Page and Block editor.  
 * 
 * @author: jtemplet
 * @version: 0.1
 * @date: 2012/02/19
 */

CMSPage.storage = CMSPage.storage|| {
    // properties
    initialise: function() {
        if (Modernizr.localstorage) {
            // window.localStorage is available!
        } else {
        // no native support for HTML5 storage        
            alert('This system requires a modern web browser that supports localStorage. Please use a more modern browser. Can we suggest Chrome or Firefox?');
        }
    },
    put: function(key, value) {
        return localStorage.setItem(key, value);
    },
    get: function(key) {
        return localStorage.getItem(key);
    },
    remove: function(key) {
        return localStorage.removeItem(key);
    }
    
};
