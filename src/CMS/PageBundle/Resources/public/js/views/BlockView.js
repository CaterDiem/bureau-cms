/* 
 * Block
 * View for block data
 * 
 * @author: jtemplet
 * @version: 0.1
 * @date: 2012/03/21
 */

var BlockView = Backbone.View.extend({
    //tagName: 'data-cms-block',
    tagName: 'div',
    events: {
        "mouseenter": "setActive",
        "mouseleave": "setInactive",
        //"mouseenter .block-toolbar": "unfadeToolbar",
        //"mouseleave .block-toolbar": "fadeToolbar",
        "blur .block-content": "storeContentChanges"        
        
    },    
    initialize: function() {
        
        // TODO: work out if this is really the place to update the elementId 
        this.model.generateElementId();
        this.el = $('#' + this.model.get('element')).html();

        this.listenTo(this.model, 'change', this.render);         
        this.listenTo(this.model, 'destroy', this.remove);


        this.template = _.template($('[cms-template-for="' + this.model.get('type').toLowerCase() + '"]').html());
        this.setElement(this.$el);

    },
    render: function() {
        // element needs triming for whitespace, unless you enjoy syntax errors.
        
        
        element = $.trim(this.template({data: this.model.toJSON()}));

        this.setElement(element);

        
        //TODO: fix all the below haxx? this does solve the problem, though.
        
        // add or replace the element on the page with the updated view. this is needed as I'm probably not nesting my views as subviews properly. >_>
        if ($('#' + this.model.get('element')).length > 0) {
            CMSPage.debug.log('Replacing block:' + this.model.get('name') + ' on page.');
            //$('#' + block.get('element')).hide();
            $('#' + this.model.get('element')).replaceWith(this.el);
            
        } else {            
            CMSPage.debug.log('Adding block:' + this.model.get('name') +
                    ' to page element: ' + this.model.get('parent')
                    .get('element'));
            
            $('#' + this.model.get('parent').get('element')).append(this.el);
        }
        
        // attach the toolbar
        toolbar = CMSPage.ui.attachToolbar(BLOCK_TOOLBAR, this.$el, this.model.get('element'), this.model.get('events'));
        
        // render all children views, too.
         if (this.model.get('children').length > 0) {
            this.model.get('children').forEach(function (model){ 
                if(model.view){ 
                    model.view.render();
                }
            });
        }
                
        return this;
    },
    remove: function() {
        return this;
    },
    setActive: function() {
        //CMSPage.debug.log(this.model.get('name') + ': now active. Showing [cms-toolbar-type=' + BLOCK_TOOLBAR + ']');
        this.$el.children('[cms-toolbar-type=' + BLOCK_TOOLBAR + ']').show();
        if (this.model.get('type') != BLOCK_TYPE_ROOT) {
            this.$el.addClass('cms-block-active');
        }
    },
    setInactive: function() {
        //CMSPage.debug.log(this.model.get('name') + ': now inactive');

        this.$el.children('[cms-toolbar-type=' + BLOCK_TOOLBAR + ']').hide();
        if (this.model.get('type') != BLOCK_TYPE_ROOT) {
            this.$el.removeClass('cms-block-active');
        }
    },
    fadeToolbar: function(){
        
        this.$el.find('.block-toolbar').css('opacity', '0.5');
    },
    unfadeToolbar: function(){
        this.$el.find('.block-toolbar').css('opacity', '1');
    },
    storeContentChanges: function() {
        this.model.set('content', this.$el.find('.block-content').html());
        this.model.save();
    }/*,
    delegateEvents: function(events) {
        var delegateEventSplitter = /^(\S+)\s*(.*)$/;
        
        //console.log((events || (events = _.result(this, 'events'))));
        if (!(events || (events = _.result(this, 'events')))){
            return this;
        }
        this.undelegateEvents();
        for (var key in events) {
            //console.log(key);
            var method = events[key];
            if (!_.isFunction(method)){
                method = this[events[key]];
            }
            
            if (!method){
                continue;
            }

            var match = key.match(delegateEventSplitter);
            console.log(match);
            var eventName = match[1], selector = match[2];
            method = _.bind(method, this);
            eventName += '.delegateEvents' + this.cid;
            if (selector === '') {
                this.$el.on(eventName, method);                
            } else {
                this.$el.on(eventName, selector, method);
            }
            console.log(this.$el.attr('id'), eventName, selector);   
        }
        return this;
    },*/
});