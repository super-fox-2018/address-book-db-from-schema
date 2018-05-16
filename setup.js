const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./address_book.db');

let Contacts = `CREATE TABLE IF NOT EXISTS Contacts(
  ID INTEGER PRIMARY KEY AUTOINCREMENT,
  name varchar(30),
  company text,
  phone varchar(14),
  email varchar(30)
);`


let group = `CREATE TABLE IF NOT EXISTS Groups (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name varchar(20)
  );`


let contactGroup = `CREATE TABLE contact_group (
	id	INTEGER PRIMARY KEY AUTOINCREMENT,
	contact_id	INTEGER,
	group_id	INTEGER,
	FOREIGN KEY(contact_id) REFERENCES Contacts(ID),
	FOREIGN KEY(group_id) REFERENCES Groups(id)
);`



db.run(Contacts, function(err) {
  if (err) throw err;
  console.log('Successfully created a new contacts table!');
});

db.run(group, function(err) {
  if (err) throw err;
  console.log('Successfully created a new group table!');
});

db.run(contactGroup, function(err) {
  if (err) throw err;
  console.log('Successfully created a new contactGroup table!');
});
