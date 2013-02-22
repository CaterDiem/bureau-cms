/* 
 * CMSPageUI
 * UI functionality for the Page and Block editor.  
 * 
 * @author: jtemplet
 * @version: 0.1
 * @date: 2012/02/06
 */

var CMSPageUI = CMSPageUI || {
    
    defaultEditorDeactivateHandler: function(editable) {
        var content = Aloha.activeEditable.getContents();
        var contentId = Aloha.activeEditable.obj[0].id;
        var pageId = window.location.pathname;

        // textarea handling -- html id is "xy" and will be "xy-aloha" for the aloha editable
        if (contentId.match(/-aloha$/gi)) {
            contentId = contentId.replace(/-aloha/gi, '');
        }

        console.log(content, contentId, pageId);
        /*
         var request = jQuery.ajax({
         url: "save.php",
         type: "POST",
         data: {
         content: content,
         contentId: contentId,
         pageId: pageId
         },
         dataType: "html"
         });
         
         request.done(function(msg) {
         jQuery("#log").html(msg).show().delay(800).fadeOut();
         });
         
         request.error(function(jqXHR, textStatus) {
         alert("Request failed: " + textStatus);
         });*/
    },
    
    // properties
    initialise: function() {
        // set up aloha
        this.initialiseAloha();
    },
    initialiseAloha: function() {
        // general aloha setup
        Aloha.settings = {
            behaviour: 'topalign',
            sidebar: {
                disabled: true
            }
        };

        // setup our custom buttons
        Aloha.require(['common/ui','common/format','common/paste','common/undo','common/link','common/image']);
        
        Aloha.require(['ui/ui', 'ui/button'], function(Ui, Button) {
            var button = Ui.adopt("myButton", Button, {
                tooltip: 'Add container',
                icon: 'aloha-icon aloha-icon-add',                  
                click: function() {
                    alert("Click!");
                }
            });
        });

        // setup our toolbars.        
        Aloha.settings.toolbar = {
            tabs: [
                {
                    label: 'Containers',
                    components: [
                        ['myButton']
                    ]
                }
            ]
        };

        // bind editor deactivate functions
        Aloha.bind('aloha-editable-deactivated', this.defaultEditorDeactivateHandler);
    },

    getActiveEditorDetails: function(){
        element = $('#'+Aloha.activeEditable.obj[0].id);
        var edObj = {
            'content' : Aloha.activeEditable.getContents(),
            'elementId' : element.attr('id'),
            'blockId' : element.attr('cms-block-id'),
        };
        return edObj;
    },
    // editor functions
    
    setGlobalEditorDeactivationHandler: function (handlerFunction){
        Aloha.bind('aloha-editable-deactivated', handlerFunction);      
    },
        
    setEditorDeactivationHandler: function (editorInstance, handlerFunction){
        editorInstance.bind('aloha-editable-deactivated', handlerFunction);
    },
    attachLayoutToolbar: function (element){
        
    },    
    attachEditor: function(block) {

    }

    



};
