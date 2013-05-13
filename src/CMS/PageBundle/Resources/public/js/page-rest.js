/* 
 * CMSPageRest
 * RESTful functionality for the Page and Block editor. 
  * 
 * @author: jtemplet
 * @version: 0.1
 * @date: 2012/02/07
 */

var RESPONSE_TYPE = 'json';
var ALLOWED_REQUEST_TYPES = ['GET', 'PUT', 'POST', 'DELETE'];

CMSPage.rest = CMSPage.rest || { 
    // properties
    
    
    // default handler functions
    
    requestSuccessHandler: function(data){
        CMSPage.debug.log('Requst completed: '+ data);
    },
    requestFailureHandler: function(jqxhr, statusMessage){
        CMSPage.debug.log('Requst dun fail: '+statusMessage);
    },
    
    // functions
    get: function (target, successCallback, failureCallback){
        CMSPage.debug.log("GETting "+target);        
        this.ajaxRequest('GET', target, [], successCallback, failureCallback);
    },
        
    post: function (target, payload, successCallback, failureCallback){
        CMSPage.debug.log("POSTting "+target);        
        this.ajaxRequest('POST', target, payload, successCallback, failureCallback);
    },
        
    put: function (target, payload, successCallback, failureCallback){
        CMSPage.debug.log("PUTting "+target);        
        this.ajaxRequest('PUT', target, payload, successCallback, failureCallback);
    },
        
    remove: function (target, payload, successCallback, failureCallback){
        CMSPage.debug.log("DELETEing "+target);        
        this.ajaxRequest('DELETE', target, payload, successCallback, failureCallback);
    },
        
    ajaxRequest: function(requestType, target, dataset, successCallback, failureCallback){        
        if(successCallback == null){
            successCallback = this.requestSuccessHandler;
        }        
    
        if(failureCallback == null){
            failureCallback = this.requestFailureHandler;
        }        
        if(jQuery.inArray(requestType, ALLOWED_REQUEST_TYPES) > -1 ){  // we have to compare result to -1 as .inArray returns -1 for a failure, not a 0, since it's a position of element in array thing.
            var jqxhr = $.ajax(
                    {
                        type: requestType,
                        url: CMS_REST_BASE_URL+target+'.'+RESPONSE_TYPE, 
                        data: dataset,
                        cache: false,
                        mimeType: RESPONSE_TYPE
                    }
                )
                .done(function(data){
                    successCallback(data);
                })
                .fail(function(jqxkr, status){            
                    failureCallback(jqxhr, status);
                })
            ;        
        }else{
            // THROW AN EXCEPTION OR SOMETHING.
            CMSPage.debug.log(requestType+'? Invalid valid request type. This is REST, you know.')
        }
    }

    
};
