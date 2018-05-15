const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('address_book.db');

db.run(`CREATE TABLE IF NOT EXISTS contacts
        (id INTEGER PRIMARY KEY AUTOINCREMENT,name VARCHAR(50),
        phone_number VARCHAR(20))`);

db.run(`CREATE TABLE IF NOT EXISTS groups
        (id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(50))`);

db.run(`CREATE TABLE IF NOT EXISTS contact_groups
        (id INTEGER PRIMARY KEY AUTOINCREMENT,
        contact_id INTEGER REFERENCES Contacts(id),
        group_id INTEGER REFERENCES Groups(id))`);