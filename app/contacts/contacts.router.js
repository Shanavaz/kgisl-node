const contactsController = require("./contacts.controller");


exports.routes = function (app) {
    console.log("Contact router")

    app.post('/createcontact', 
        contactsController.createContact
    );
    
    app.put('/updatecontact', 
        contactsController.updateContact
    );

    app.get('/fetchallcontacts', 
        contactsController.fetchAllContacts
    );

    app.delete('/deletecontactbyid/:id', 
        contactsController.deleteContactById
    );
}