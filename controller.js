const Setup = require('./setup');
const Contact = require('./contact');
const Group = require('./group');
const View = require('./view');

class Controller {
  static setup() {
    console.log(Setup);
    Setup.setup();
  }

  static addContact(name, address) {
    let newContact = new Contact({name, address});
    newContact.save();
  }

  static deleteContact(id) {
    let deletedContact = new Contact({id});
    deletedContact.delete();
  }

  static updateContact(id, name, address) {
    let updatedContact = new Contact({id, name, address});
    updatedContact.update();
  }
}

// let contact = new Contact({name: 'michael', address: 'gading'});
// console.log(`id sebelum save: ${contact.id}`);
// contact.save();
// console.log(`id setelah save:${contact.id}`);

// contact.name = 'mikael';
// contact.update();

module.exports = Controller;
