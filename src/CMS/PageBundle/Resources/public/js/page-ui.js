/* 
 * CMSPageUI
 * UI functionality for the Page and Block editor.  
 * 
 * @author: jtemplet
 * @version: 0.1
 * @date: 2012/02/06
 */

var LAYOUT_TOOLBAR = "layout-toolbar";
var LAYOUT_TOOLBAR_POPUP = "layout-toolbar-popup";
var PAGE_TOOLBAR = "page-toolbar";

var LAYOUT_TOOLBAR_POPUP = "layout-toolbar-popup";

var MORE_OPTIONS_BUTTON = '[cms-button-action=layout-options]';
var MORE_OPTIONS_EDIT = '[cms-button-action=toolbar-popup-edit]';
var MORE_OPTIONS_INFO = '[cms-button-action=toolbar-popup-info]';
var MORE_OPTIONS_DELETE = '[cms-button-action=toolbar-popup-trash]';
        

var CMSPageUI = CMSPageUI || {
    defaultEditorDeactivateHandler: function(editable) {
        var content = editable.html();
        var contentId = editable.id;
        var pageId = window.location.pathname;

        console.log(content, contentId, pageId);
    },
    defaultAlohaEditorDeactivateHandler: function(editable) {
        var content = Aloha.activeEditable.getContents();
        var contentId = Aloha.activeEditable.obj[0].id;
        var pageId = window.location.pathname;

        // textarea handling -- html id is "xy" and will be "xy-aloha" for the aloha editable
        if (contentId.match(/-aloha$/gi)) {
            contentId = contentId.replace(/-aloha/gi, '');
        }

        console.log(content, contentId, pageId);
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
        Aloha.require(['common/ui', 'common/format', 'common/paste', 'common/undo', 'common/link', 'common/image']);

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
    getActiveEditorDetails: function(editable) {
        element = $('#' + editable.currentTarget.id);
        console.log(element);
        var edObj = {
            'content': element.html(),
            'elementId': element.attr('id'),
            'blockId': element.attr('cms-block-id')
        };
        return edObj;
    },
    // editor functions   
    setGlobalEditorDeactivationHandler: function(handlerFunction) {
        //Aloha.bind('aloha-editable-deactivated', handlerFunction);      
        $('[contenteditable="true"]').blur(handlerFunction)
    },
    setEditorDeactivationHandler: function(editorInstance, handlerFunction) {
        editorInstance.bind('aloha-editable-deactivated', handlerFunction);
    },
    attachToolbar: function(toolbar, element) {        
        newToolbar = $("#" + toolbar).clone();
        newToolbar.attr('id', element.id + toolbar);

        $(element).after(newToolbar);
        return newToolbar;
    },
    attachPopupToolbar: function(toolbar, element, events) {
        
        newToolbar = $("#" + toolbar).clone();
        newToolbar.attr('id', element.attr('id'));
        // bind button events                    
        
        for(i in events){
            console.log(i, events[i], newToolbar.children(i));
            newToolbar.children(i).bind('click', function (){ events[i]();});            
        }
        
        /*newToolbar.children(MORE_OPTIONS_EDIT).bind('click', function (event){ console.log(event)});
        newToolbar.children(MORE_OPTIONS_INFO).bind('click', function (event){});
        newToolbar.children(MORE_OPTIONS_DELETE).bind('click', function (event){});*/
        
        // add element to page, but hide it
        newToolbar.hide();
        $(element).after(newToolbar);
        // add as popup on more button
        newPopup = $(element).toolbar({
            content: '#' + newToolbar.attr('id'),
            position: 'right',
            hideOnClick: 'true'
        });
        
        return newPopup;
    },
    attachDefaultToolbars: function(){
        $(SELECTOR_EDITABLE_HTML_BLOCKS).each(function (){                         
            toolbar = CMSPageCore.ui.attachToolbar(LAYOUT_TOOLBAR, this);
            // attach popup toolbar
            var events = {};
            events[MORE_OPTIONS_EDIT] = 'doEdit';
            events[MORE_OPTIONS_INFO] = 'doInfo';
            events[MORE_OPTIONS_DELETE] = 'doDelete';
            popupToolbar = CMSPageUI.attachPopupToolbar(LAYOUT_TOOLBAR_POPUP, toolbar.children(MORE_OPTIONS_BUTTON), events);
            
        });
        
    },
    attachEditor: function(block) {

    }





};
