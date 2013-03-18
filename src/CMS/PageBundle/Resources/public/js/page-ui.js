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
var EDITABLE_BLOCK_TOOLBAR_POPUP = "editable-block-toolbar-popup";

var LAYOUT_TOOLBAR_MOVE_UP = '[cms-button-action=layout-move-up]';
var LAYOUT_TOOLBAR_MOVE_DOWN = '[cms-button-action=layout-move-down]';
var LAYOUT_TOOLBAR_MORE_OPTIONS_BUTTON = '[cms-button-action=layout-options]';

var MORE_OPTIONS_EDIT = '[cms-button-action=toolbar-popup-edit]';
var MORE_OPTIONS_INFO = '[cms-button-action=toolbar-popup-info]';
var MORE_OPTIONS_DELETE = '[cms-button-action=toolbar-popup-trash]';
var MORE_OPTIONS_ADD = '[cms-button-action=toolbar-popup-add]';

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
    attachToolbar: function(toolbarType, element, events) {
        newToolbar = $("#" + toolbarType).clone();
        newToolbar.attr('id', element.id + toolbarType);
        newToolbar.attr('cms-toolbar-target', element.id);

        // bind button events                    
        for (var ev in events) {
            CMSPageUI.bindToolbarEvent(newToolbar.children(ev), events[ev].type, element.id, events[ev].callback); // most confusing line ever.            
        }



        $(element).before(newToolbar);
        return newToolbar;
    },
    attachPopupToolbar: function(toolbarType, triggerElement, eventTarget, events) {

        newToolbar = $("#" + toolbarType).clone();        
        newToolbar.attr('id', toolbar.attr('id') + '-' + toolbarType);
        newToolbar.attr('cms-toolbar-target', eventTarget.id);

        // bind button events                    
        for (var ev in events) {
            CMSPageUI.bindToolbarEvent(newToolbar.children(ev), events[ev].type, eventTarget, events[ev].callback); // most confusing line ever.            
        }

        // add element to page, but hide it
        newToolbar.hide();
        $(triggerElement).before(newToolbar);
        // add as popup on more button
        newPopup = $(triggerElement).toolbar({
            content: '#' + newToolbar.attr('id'),
            position: 'right',
            hideOnClick: 'true'
        });

        return newPopup;
    },
    attachDefaultToolbars: function() {
        // all the haxx.        
        $(SELECTOR_EDITABLE_HTML_BLOCKS).each(function() {            
            var events = {};
            events[LAYOUT_TOOLBAR_MOVE_UP] = {type: 'click', callback: CMSPageUI.doEdit};
            events[LAYOUT_TOOLBAR_MOVE_DOWN] = {type: 'click', callback: CMSPageUI.doEdit};
            
            toolbar = CMSPageCore.ui.attachToolbar(LAYOUT_TOOLBAR, this, events);
            
            // attach popup toolbar
            var popupEvents = {};
            popupEvents[MORE_OPTIONS_EDIT] = {type: 'click', callback: CMSPageUI.doEdit};
            popupEvents[MORE_OPTIONS_INFO] = {type: 'click', callback: CMSPageUI.doEdit};
            popupEvents[MORE_OPTIONS_DELETE] = {type: 'click', callback: CMSPageUI.doEdit};

            popupToolbar = CMSPageUI.attachPopupToolbar(EDITABLE_BLOCK_TOOLBAR_POPUP, toolbar.children(LAYOUT_TOOLBAR_MORE_OPTIONS_BUTTON), toolbar.attr('cms-toolbar-target'), popupEvents);
        });
        
        $(SELECTOR_EDITABLE_LAYOUT_BLOCKS).each(function() {            
            var events = {};
            events[LAYOUT_TOOLBAR_MOVE_UP] = {type: 'click', callback: CMSPageUI.doEdit};
            events[LAYOUT_TOOLBAR_MOVE_DOWN] = {type: 'click', callback: CMSPageUI.doEdit};
            
            toolbar = CMSPageCore.ui.attachToolbar(LAYOUT_TOOLBAR, this, events);
            
            // attach popup toolbar
            var popupEvents = {};
            popupEvents[MORE_OPTIONS_ADD] = {type: 'click', callback: CMSPageUI.doEdit};
            popupEvents[MORE_OPTIONS_EDIT] = {type: 'click', callback: CMSPageUI.doEdit};
            popupEvents[MORE_OPTIONS_INFO] = {type: 'click', callback: CMSPageUI.doEdit};
            popupEvents[MORE_OPTIONS_DELETE] = {type: 'click', callback: CMSPageUI.doEdit};

            popupToolbar = CMSPageUI.attachPopupToolbar(LAYOUT_TOOLBAR_POPUP, toolbar.children(LAYOUT_TOOLBAR_MORE_OPTIONS_BUTTON), toolbar.attr('cms-toolbar-target'), popupEvents);
        });
    },
    bindToolbarEvent: function(button, event, eventTarget, callback) {
        button.bind(event, function() {
            callback(eventTarget, button);
        });
    },
    attachEditor: function(block) {

    },
    doEdit: function(target, trigger) {
        console.log(target, trigger);
    }





};
