/* 
 * CMSPagePages
 * Core module for Pages
 * 
 *
 * 
 * @author: jtemplet
 * @version: 0.1
 * @date: 2013/04/22
 */

CMSPage.pages = CMSPage.pages || {
    // properties

    // functions
    init: function() {
    },
    add: function() {

        // create form to collect new page information
        page = new Page();
        page.urlRoot = CMS_REST_BASE_URL + PAGE_URI; // have to set this here, and not in model, as its not known til runtime

        // create form based on the model, telling it to use the newBlockSchema instead of the standard block schema.
        newPageForm = new Backbone.Form({
            model: page,
            schema: page.newPageSchema
        }).render();

        return CMSPage.ui.showModalForm(newPageForm, 'Create a new page', {
            confirm: function() {
                results = newPageForm.validate();
                if (results != null) {
                    // we have an error.                    
                } else {
                    newPageForm.commit();

                    addPage(newPageForm.model);
                    $('#cms-modal').modal('hide');
                }
            }
        });
    },
    remove: function() {

    },
    addPage: function(page) {
        CMSPage.debug.log("Adding new page:" + page.get('name'));
        page.save({
            success: function(model, response, options) {
                console.log(model);
                console.log('new page at: ' + model.slug);
            }
        }); // push new page data to the server. 

    }
}

