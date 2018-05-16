const fs = require('fs');
const db = require('../db');

class Contact {
  constructor(obj) {
    this._name = obj.name;
    this._phone = obj.phone;
    this._email = obj.email;
    this._company = obj.company;
    this._id = 0;
  }

  get name() { return this._name }
  get phone() { return this._phone }
  get email() { return this._email }
  get company() { return this._company }

  static readJSONData(callback) {
    fs.readFile('./contacts.json', 'utf8', function(err, contacts) {
      if (err) throw err;
      let parsed = JSON.parse(contacts)
      callback(parsed);
    })
  }

  static addFromJSON() {
    Contact.readJSONData((contacts) => {
      for (let i = 0; i < contacts.length; i++) {
        let contact = contacts[i];
        console.log("JSON data ==>", contact);
        let query = `INSERT INTO contacts (name, phone, email, company)
                     VALUES ('${contact.name}', '${contact.phone}', 
                     '${contact.email}', '${contact.company}')`;
        Contact.writeData(query);
      }
    })
  }

  static readAll(callback) {
    let query = `SELECT * FROM contacts`;
    db.all(query, (err, contacts) => {
      if (err) throw err;
      callback(contacts);
    })
  }

  static writeData(query) {
    db.run(query, (err) => {
      if (err) throw err;
      console.log("Data saved successfully.")
    })
  }

  static registerContact(obj, callback) {
    // INSERT obj method
    let query = `INSERT INTO contacts (name, phone, email, company)
                 VALUES ('${obj.name}', '${obj.phone}', 
                 '${obj.email}', '${obj.company}')`;
  
    db.run(query, (err) => {
      if (err) throw err;
      callback(obj);
    })
  }

  static updateContact(id, column, value, callback) {
    // UPDATE method
    let query = `UPDATE contacts SET ${column} = '${value}'
                 WHERE id = ${id}`
    db.run(query, (err) => {
      if (err) throw err;
      db.all(`SELECT * FROM contacts WHERE id = ${id}`, (err, contact) => {
        if (err) throw err;
        callback(contact);
      })
    })
  }

  static deleteContact(id, callback) {
    let query = `DELETE FROM contacts WHERE id = ${id}`;
    db.run(query, (err) => {
      if (err) throw err;
      let msg = (`Contact ID: ${id} successfully deleted`);
      callback(msg);
    })
  }
}

// Contact.addFromJSON();

module.exports = Contact;