const contactsService = require("./contacts.service");
const db = require("../db/data.json");


exports.createContact = async (req, res) => {
    try {

        // for (let i = 0; i < db.length; i++) {
        //     console.log(db[i].id)
        //     if (db[i].id == id) {
        //         console.log('Id found')
        //         db.splice(i, 1)
        //         break;
        //     }
        // }

        console.log(db.length)
        let id = 1
        if (db.length === 0 || db[db.length - 1].id === undefined) {
            id = 1
        } else {
            id = db[db.length - 1].id
        }
        // var id = ++(process.env.id)
        let contact = {
            id: ++id,
            name: req.body.name,
            createdDate: req.body.createdDate,
            number: req.body.number,
            incomingCallCount: req.body.incomingCallCount,
            outGoingCallCount: req.body.outGoingCallCount,
            location: req.body.location,
        };
        console.log("createContact -contactsController");
        let status = await contactsService.createContact(contact);
        res.status(201).json({
            resStatus: true,
            statusCode: status.status,
            message: status.message,
            id: contact.id
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            resStatus: false,
            data: []
        });
    }
};

exports.updateContact = async (req, res) => {
    try {
        let contact = {
            id: req.body.id,
            name: req.body.name,
            createdDate: req.body.createdDate,
            number: req.body.number,
            incomingCallCount: req.body.incomingCallCount,
            outGoingCallCount: req.body.outGoingCallCount,
            location: req.body.location,
        };
        console.log("updateContact -contactsController");
        let status = await contactsService.updateContact(contact);
        res.status(201).json({
            resStatus: true,
            statusCode: status.status,
            message: status.message,
            id: contact.id
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            resStatus: false,
            data: []
        });
    }
};

exports.deleteContactById = async (req, res) => {
    try {
        // let contact = {
        //     id: req.body.id,
        //     name: req.body.name,
        //     createdDate: req.body.createdDate,
        //     number: req.body.number,
        //     incomingCallCount: req.body.incomingCallCount,
        //     outGoingCallCount: req.body.outGoingCallCount,
        //     location: req.body.location,
        // };
        let id = req.params.id
        console.log("deleteContactById -contactsController");
        console.log(id)
        let status = await contactsService.deleteContactById(id);
        res.status(201).json({
            resStatus: true,
            statusCode: status.status,
            message: status.message,
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            resStatus: false,
            data: []
        });
    }
};

exports.fetchAllContacts = async (req, res) => {
    try {
        console.log("fetchAllContacts -contactsController");
        let status = await contactsService.fetchAllContacts();
        res.status(201).json({
            resStatus: true,
            statusCode: status.status,
            message: status.message,
            data: status.data,
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            resStatus: false,
            data: []
        });
    }
};