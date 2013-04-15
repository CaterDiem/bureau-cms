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
    // properties
    
    // functions
    defaultEditorDeactivateHandler: function(editable) {
        var content = editable.html();
        var contentId = editable.id;
        var pageId = window.location.pathname;

        CMSPageCore.debug.log(content, contentId, pageId);
    },
    initialise: function() {     
    },
    getActiveEditorDetails: function(editable) {
        element = $('#' + editable.currentTarget.id);
        
        var edObj = {
            'content': element.children('.block-content').html(),
            'elementId': element.attr('id'),
            'blockId': element.attr('cms-block-id')
        };        
        return edObj;
    },
    // editor functions   
    setGlobalEditorDeactivationHandler: function(handlerFunction) {
        //Aloha.bind('aloha-editable-deactivated', handlerFunction);      
        $('[contenteditable="true"]').blur(handlerFunction);
    },
    setEditorDeactivationHandler: function(editorInstance, handlerFunction) {
        editorInstance.bind('aloha-editable-deactivated', handlerFunction);
    },
    /** 
     * attach a toolbar to an element
     * @param toolbarType selector for the toolbar to clone for this element. Use the 'consts' at start of file.
     * @param element The element to attach the toolbar to
     * @param eventTarget The target block this toolbar interacts with
     * @param events Object containing events and callbacks to bind to the toolbar buttons
     * @returns newToolbar The newly created and attached toolbar
     */
    attachToolbar: function(toolbarType, element, eventTarget, events) {           
        newToolbar = $("#" + toolbarType).clone();
        newToolbar.attr('id', eventTarget + toolbarType);
        newToolbar.attr('cms-toolbar-target', eventTarget);
        newToolbar.attr('cms-toolbar-type', toolbarType);

        // bind button events                    
        for (var ev in events) {            
            CMSPageCore.ui.bindToolbarEvent(newToolbar.children(ev), events[ev].event, events[ev].type, eventTarget, events[ev].callback); // most confusing line ever.            
        }

        $(element).prepend(newToolbar);
        newToolbar.hide();
        
        return newToolbar;
    },
    /**
     * attach a popup toolbar to an element
     */
    attachPopupToolbar: function(toolbarType, triggerElement, eventTarget, events) {
        newToolbar = CMSPageCore.ui.attachToolbar(toolbarType, triggerElement, eventTarget, events);
        
        newToolbar.attr('cms-toolbar-type', toolbarType);
        
        // hide the new toolbar that attachToolbar just added to this element, as it'll be a popup. needs to be added to the page for the events to correctly bind.
        newToolbar.hide();
        
        // add as popup on triggerElement
        newPopup = $(triggerElement).toolbar({
            content: '#' + newToolbar.attr('id'),
            position: 'bottom',
            hideOnClick: 'true'
        });

        return newPopup;
    },
    attachDefaultToolbars: function() {
        // all the haxx.        
        $(SELECTOR_EDITABLE_HTML_BLOCKS).each(function() {            
            var events = {};
            events[LAYOUT_TOOLBAR_MOVE_UP] = {event: 'moveUp', type: 'click', callback: CMSPageCore.blocks.handleEvent};
            events[LAYOUT_TOOLBAR_MOVE_DOWN] = {event: 'moveDown', type: 'click', callback: CMSPageCore.blocks.handleEvent};
            
            toolbar = CMSPageCore.ui.attachToolbar(LAYOUT_TOOLBAR, this,  this.id, events);
            
            // attach popup toolbar
            var popupEvents = {};
            popupEvents[MORE_OPTIONS_EDIT] = {event: 'edit', type: 'click', callback: CMSPageCore.blocks.handleEvent};
            popupEvents[MORE_OPTIONS_INFO] = {event: 'info', type: 'click', callback: CMSPageCore.blocks.handleEvent};
            popupEvents[MORE_OPTIONS_DELETE] = {event: 'remove', type: 'click', callback: CMSPageCore.blocks.handleEvent};

            popupToolbar = CMSPageCore.ui.attachPopupToolbar(EDITABLE_BLOCK_TOOLBAR_POPUP, toolbar.children(LAYOUT_TOOLBAR_MORE_OPTIONS_BUTTON), toolbar.attr('cms-toolbar-target'), popupEvents);
        });
        
        $(SELECTOR_EDITABLE_LAYOUT_BLOCKS).each(function() {            
            var events = {};
            events[LAYOUT_TOOLBAR_MOVE_UP] = {event: 'moveUp', type: 'click', callback: CMSPageCore.blocks.handleEvent};
            events[LAYOUT_TOOLBAR_MOVE_DOWN] = {event: 'moveDown', type: 'click', callback: CMSPageCore.blocks.handleEvent};
            
            toolbar = CMSPageCore.ui.attachToolbar(LAYOUT_TOOLBAR, this, this.id, events);
            
            // attach popup toolbar
            var popupEvents = {};
            popupEvents[MORE_OPTIONS_ADD] = {event: 'add', type: 'click', callback: CMSPageCore.blocks.handleEvent};
            popupEvents[MORE_OPTIONS_EDIT] = {event: 'edit', type: 'click', callback: CMSPageCore.blocks.handleEvent};
            popupEvents[MORE_OPTIONS_INFO] = {event: 'info', type: 'click', callback: CMSPageCore.blocks.handleEvent};
            popupEvents[MORE_OPTIONS_DELETE] = {event: 'remove', type: 'click', callback: CMSPageCore.blocks.handleEvent};

            popupToolbar = CMSPageUI.attachPopupToolbar(LAYOUT_TOOLBAR_POPUP, toolbar.children(LAYOUT_TOOLBAR_MORE_OPTIONS_BUTTON), toolbar.attr('cms-toolbar-target'), popupEvents);
        });
    },
    bindToolbarEvent: function(button, event, eventType, eventTarget, callback) {
        button.bind(eventType, function() {            
            callback(eventTarget, event, eventType);
        });
    },
    attachEditor: function(block) {

    }


};
