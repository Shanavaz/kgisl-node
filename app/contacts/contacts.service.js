const db = require("../db/data.json");


exports.createContact = async (contact) => {
    try {
        console.log("createContact -contactsService")

        db.push(contact)
        let responseObject = {
            status: 201,
            message: 'Contact added successfully',
        }
        return responseObject;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
};

exports.deleteContactById = async (id) => {
    try {
        console.log("deleteContactById -contactsService")

        // db.map((contact)=>{  
        //     if(contact.id === id){
        //         console.log('Id found')
        //         console.log(console)
        //         break;
        //     }
        // })

        for (let i = 0; i < db.length; i++) {
            console.log(db[i].id)
            if (db[i].id == id) {
                console.log('Id found')
                db.splice(i, 1)
                break;
            }
        }

        let responseObject = {
            status: 201,
            message: 'Contact deleted successfully',
        }
        return responseObject;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
};

exports.updateContact = async (contact) => {
    try {
        console.log("updateContact -contactsService")
        let index = contact.id
        console.log(index)
        // db.map((val)=>{  
        //     console.log( val);
        // })
        let dbContact = db[index - 1]
        // console.log(dbContact)
        if (!(contact.name === undefined || contact.name === null)) {
            console.log(dbContact)
            console.log("hello")
            dbContact['name'] = contact.name
        }
        // console.log(dbContact)
        if (!(contact.createdDate === null || contact.createdDate === undefined)) dbContact['createdDate'] = contact.createdDate
        // console.log(dbContact)
        if (!(contact.number === null || contact.number === undefined)) dbContact['number'] = contact.number
        // console.log(dbContact)
        if (!(contact.incomingCallCount === null || contact.incomingCallCount === undefined)) dbContact['incomingCallCount'] = contact.incomingCallCount
        if (!(contact.location === null || contact.location === undefined)) dbContact['location'] = contact.location
        if (!(contact.outGoingCallCount === null || contact.outGoingCallCount === undefined)) dbContact['outGoingCallCount'] = contact.outGoingCallCount
        // contact.name !== null || undefined ? dbContact['name'] = contact.name : console.log('name not updated')
        db[index - 1] = dbContact

        let responseObject = {};
        responseObject = {
            status: 201,
            message: 'Contact updated successfully',
        }
        return responseObject;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
};

exports.fetchAllContacts = async () => {
    try {
        console.log("fetchAllContacts -contactsService")
        let responseObject = {};
        responseObject = {
            data: db,
            status: 201,
            message: 'List of contacts',
        }
        return responseObject;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
};