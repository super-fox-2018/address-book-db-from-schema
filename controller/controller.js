const View = require('../view/view.js');
const Contact = require('../model/Contact.js');

class Controller {

  static addFromJSON() {
    Contact.addFromJSON();
  }
  static getContacts() {}
}

module.exports = Controller;