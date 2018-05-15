const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./address_book.db');

class Contact {
  constructor(obj) {
    this.id = obj.id || null;
    this.name = obj.name || null;
    this.address = obj.address || null;
  }

  save() {
    let contact = this;
    let query = `INSERT INTO contacts (name, address) VALUES ('${this.name}', '${this.address}');'`;
    db.run(query, function(err) {
      console.log(this.lastID);
      contact.id = this.lastID;
      console.log('Successfully add new contact');
    });
  }

  delete() {
    let contact = this;
    let query = `DELETE FROM contacts WHERE id = '${this.id}';`;
    db.run(query, function(err) {
      console.log(`Successfully delete contact id: ${contact.id}`);
    });
  }

  update() {
    db.run(`UPDATE contacts SET name = '${this.name}' WHERE id = '${this.id}';`);
    db.run(`UPDATE contacts SET address = '${this.address}' WHERE id = '${this.id}';`);
  }
}

module.exports = Contact;
