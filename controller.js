const Contact = require('./contacts');
const View = require('./view');
const ContactGroup = require('./contact_group');

class Controller {
    static addContact(arrParam) {
        arrParam = arrParam.join('').split(':');
        let name = (arrParam[0]) ? arrParam[0] : '';
        let company = (arrParam[1]) ? arrParam[1] : '';
        let phone = (arrParam[2]) ? arrParam[2] : '';
        let email = (arrParam[3]) ? arrParam[3] : '';
        let address = (arrParam[4]) ? arrParam[4] : '';
        let contact = new Contact(name, company, phone, email, address);
        contact.save(function (name) {
            let msg = `Add Contacnt ${name} sukses!`
            View.display(msg)
        })
    }
    static showContact(arrParam) {
        let id = arrParam[0];
        Contact.readContact(id, function (contact) {
            View.display(contact)
        })
    }
    static updateContact(arrParam) {
        let id = arrParam[0];
        let arrSlice = arrParam.slice(1);
        let arrJoin = arrSlice.join(' ');
        let param = arrJoin.split('=')[0].trim();
        let value = arrJoin.split('=')[1].trim();
        Contact.update(id, param, value, function (contact) {
            let msg = `Contact ${contact.name} has been updated!`;
            View.display(msg);
        })
    }
    static deleteContact(arrParam) {
        let id = arrParam[0];
        Contact.delete(id, function (changes) {
            let msg = ''
            if (changes > 0) {
                msg = `contact ${id} deleted!`;
            } else {
                msg = `Records id: ${id} not found`;
            }
            View.display(msg)
        })
    }

    static assignContact(arrParam){
        let contactId = (arrParam[0]) ? arrParam[0] : '';
        let groupId = (arrParam[1]) ? arrParam[1] : '';
        if (contactId && groupId){
            let contactGroup = new ContactGroup(contactId,groupId)
            contactGroup.addContactGroup(function (success){
                if (success){
                    let msg = `add contact ${contactId} to group ${groupId} success`
                    View.display(msg)
                }
            })
        }
    }
}

module.exports = Controller;