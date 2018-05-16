const View = require('../view/view.js');
const Contact = require('../model/Contact.js');
const Group = require('../model/Group.js')

class Controller {
  static addContactFromJSON() {
    Contact.addFromJSON();
  }
  
  static addGroupFromJSON() {
    Group.addFromJSON();
  }

  static getAllContacts() {
    Contact.readAll((contacts) => {
      View.displayAllContacts(contacts);
    })
  }

  static showHelp() {
    View.showHelp();
  }

  static registerContact(param) {
    let obj = {
      name: param[0],
      phone: param[1],
      email: param[2],
      company: param[3]
    }

    Contact.registerContact(new Contact(obj), (contact) => {
      View.displayRegister(contact);
    })
  }

  static updateContact(param) {
    // node index update <id> <column> <value>
    let id = param[0];
    let column = param[1];
    let value = param[2];

    Contact.updateContact(id, column, value, (contact) => {
      View.displayContact(contact);
    })
  }

  static deleteContact(param) {
    let id = param[0];
    Contact.deleteContact(id, (msg) => {
      View.displayDeleted(msg);
    })
  }
}

module.exports = Controller;