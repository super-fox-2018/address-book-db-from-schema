const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./address_book.db');

const fs = require('fs');

class Setup {
  setup() {
    let contacts = JSON.parse(fs.readFileSync('contacts.json', 'utf8'));
    let groups = JSON.parse(fs.readFileSync('groups.json', 'utf8'));
    let contactsGroups = JSON.parse(fs.readFileSync('contacts_groups.json', 'utf8'));

    let createContacts = `CREATE TABLE IF NOT EXISTS contacts (
		id	INTEGER PRIMARY KEY AUTOINCREMENT,
		name	TEXT,
		address	TEXT
		);`;
    let createGroups = `CREATE TABLE IF NOT EXISTS groups (
		id	INTEGER PRIMARY KEY AUTOINCREMENT,
		name	TEXT
		);`;
    let createContactsGroups = `CREATE TABLE IF NOT EXISTS contacts_groups (
    id	INTEGER PRIMARY KEY AUTOINCREMENT,
   	contact_id	INTEGER,
   	group_id	INTEGER,
    FOREIGN KEY(contact_id) REFERENCES contacts(id)
    FOREIGN KEY(group_id) REFERENCES contacts(id)
    );`;

    db.serialize(function() {
      db.run(createContacts);
      db.run(createGroups);
      db.run(createContactsGroups);

      let contactStatement = db.prepare(`INSERT INTO contacts (name, address) VALUES (?,?)`);
      for (let i = 0; i < contacts.length; i++) {
        let contact = contacts[i];
        contactStatement.run(contact.name, contact.address);
      }
      contactStatement.finalize();

      let groupStatement = db.prepare(`INSERT INTO groups (name) VALUES (?)`);
      for (let i = 0; i < groups.length; i++) {
        let group = groups[i];
        groupStatement.run(group.name);
      }
      groupStatement.finalize();

      let contactGroupStatement = db.prepare(`INSERT INTO contacts_groups (contact_id, group_id) VALUES (?,?)`);
      for (let i = 0; i < contactsGroups.length; i++) {
        let contactGroup = contactsGroups[i];
        contactGroupStatement.run(contactGroup.contact_id, contactGroup.group_id);
      }
      contactGroupStatement.finalize();
    });

    db.close();
  }
}

module.exports = Setup;
