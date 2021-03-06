/* 
 * CMSPageUI
 * UI functionality for the Page and Block editor.  
 * 
 * @author: jtemplet
 * @version: 0.1
 * @date: 2012/02/06
 */

var BLOCK_TOOLBAR = "block-toolbar";
var BLOCK_TOOLBAR_POPUP = "block-toolbar-popup";
var PAGE_TOOLBAR = "page-toolbar";

var EDITABLE_BLOCK_TOOLBAR_POPUP = "editable-block-toolbar-popup";
var LAYOUT_TOOLBAR_MORE_OPTIONS_BUTTON = '[cms-button-action=layout-options]';

var BLOCK_TOOLBAR_MOVE_UP = '[cms-button-action=block-move-up]';
var BLOCK_TOOLBAR_MOVE_DOWN = '[cms-button-action=block-move-down]';

var BLOCK_TOOLBAR_EDIT = '[cms-button-action=block-edit]';
var BLOCK_TOOLBAR_INFO = '[cms-button-action=block-info]';
var BLOCK_TOOLBAR_DELETE = '[cms-button-action=block-trash]';
var BLOCK_TOOLBAR_ADD = '[cms-button-action=block-add]';

CMSPage.ui = CMSPage.ui || {
    // properties
    
    // functions
    defaultEditorDeactivateHandler: function(editable) {
        var content = editable.html();
        var contentId = editable.id;
        var pageId = window.location.pathname;

        //CMSPage.debug.log(content, contentId, pageId);
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
        newToolbar = $(element).find('.block-toolbar-buttons');
        // bind button events                    
        for (var ev in events) {            
            CMSPage.ui.bindToolbarEvent(newToolbar.children(ev), events[ev].event, events[ev].type, eventTarget, events[ev].callback); // most confusing line ever.                        
        }

        //CMSPage.debug.log(eventTarget+": toolbar attached.");
        
        return newToolbar;
    },
    /**
     * attach a popup toolbar to an element
     */
    attachPopupToolbar: function(toolbarType, triggerElement, eventTarget, events) {
        newToolbar = CMSPage.ui.attachToolbar(toolbarType, triggerElement, eventTarget, events);
        
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
            events[BLOCK_TOOLBAR_MOVE_UP] = {event: 'moveUp', type: 'click', callback: CMSPage.blocks.handleEvent};
            events[BLOCK_TOOLBAR_MOVE_DOWN] = {event: 'moveDown', type: 'click', callback: CMSPage.blocks.handleEvent};
            events[BLOCK_TOOLBAR_ADD] = {event: 'add', type: 'click', callback: CMSPage.blocks.handleEvent};
            events[BLOCK_TOOLBAR_EDIT] = {event: 'edit', type: 'click', callback: CMSPage.blocks.handleEvent};
            events[BLOCK_TOOLBAR_INFO] = {event: 'info', type: 'click', callback: CMSPage.blocks.handleEvent};
            events[BLOCK_TOOLBAR_DELETE] = {event: 'remove', type: 'click', callback: CMSPage.blocks.handleEvent};            

            toolbar = CMSPage.ui.attachToolbar(BLOCK_TOOLBAR, this,  this.id, events);            
        });
        
        $(SELECTOR_EDITABLE_LAYOUT_BLOCKS).each(function() {            
            var events = {};
            events[BLOCK_TOOLBAR_MOVE_UP] = {event: 'moveUp', type: 'click', callback: CMSPage.blocks.handleEvent};
            events[BLOCK_TOOLBAR_MOVE_DOWN] = {event: 'moveDown', type: 'click', callback: CMSPage.blocks.handleEvent};
            events[BLOCK_TOOLBAR_ADD] = {event: 'add', type: 'click', callback: CMSPage.blocks.handleEvent};
            events[BLOCK_TOOLBAR_EDIT] = {event: 'edit', type: 'click', callback: CMSPage.blocks.handleEvent};
            events[BLOCK_TOOLBAR_INFO] = {event: 'info', type: 'click', callback: CMSPage.blocks.handleEvent};
            events[BLOCK_TOOLBAR_DELETE] = {event: 'remove', type: 'click', callback: CMSPage.blocks.handleEvent};
            
            toolbar = CMSPage.ui.attachToolbar(BLOCK_TOOLBAR, this, this.id, events);                       
        });
    },
    bindToolbarEvent: function(button, event, eventType, eventTarget, callback) {
        button.bind(eventType, function() {            
            callback(eventTarget, event, eventType);
        });
    },
    attachEditor: function(block) {

    },
            
    showModalForm: function(form, title, events) {
        $('#cms-modal .modal-body').html(form.el);
        $('#cms-modal #cms-modal-header').html(title);
        $('#cms-modal').modal();
        for (var ev in events) {            
            $('[cms-modal-button="' + ev + '"]').unbind('click').bind('click', function() {
                events[ev]();
                
            });
        }

        return true;
    }


};
