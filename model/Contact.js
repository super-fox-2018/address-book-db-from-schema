const fs = require('fs');
const db = require('../db');

class Contact {
  constructor(obj) {
    this._name = obj.name;
    this._phone = obj.phone;
    this._email = obj.email;
    this._company = obj.company;
    this._id = obj.id || null;
  }

  static readJSONData(callback) {
    fs.readFile('./contacts.json', 'utf8', function(err, contacts) {
      if (err) throw err;
      let parsed = JSON.parse(contacts)
      callback(parsed);
    })
  }

  static addFromJSON() {
    Contact.readJSONData((contacts) => {
      console.log("JSON data ==>", contacts);

      for (let i = 0; i < contacts.length; i++) {
        let contact = contacts[i];
        let query = `INSERT INTO contacts (name, phone, email, company)
                     VALUES ('${contact.name}', '${contact.phone}', 
                     '${contact.email}', '${contact.company}')`;
        Contact.writeData(query);
      }
    })
  }

  static readData() {

  }

  static writeData(query) {
    db.run(query, (err) => {
      if (err) throw err;
      console.log("Data saved successfully.")
    })
  }

  static save() {
    // INSERT obj method
    // let query = `INSERT INTO contacts (name, phone, email, company)
    //              VALUES '${this._name}', '${this._phone}', 
    //              '${this._email}', '${this._company}'`;
  }
  static update() {
    // UPDATE method
  }

  static delete() {

  }
}

// Contact.addFromJSON();

module.exports = Contact;