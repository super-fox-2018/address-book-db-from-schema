const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./address_book.db');

let arrQuery = []
// let crtContact = `CREATE TABLE IF NOT EXISTS contacts (
//     id      INTEGER PRIMARY KEY AUTOINCREMENT
//                     NOT NULL,
//     name    TEXT,
//     company TEXT,
//     phone   TEXT,
//     email   TEXT,
//     address TEXT
// );`

// arrQuery.push(crtContact);

// let crtGroup = `CREATE TABLE IF NOT EXISTS [group] (
//     id          INTEGER PRIMARY KEY AUTOINCREMENT
//                         NOT NULL,
//     group_name  TEXT,
//     description TEXT
// );`

// arrQuery.push(crtGroup);

// let contactsGroup = `CREATE TABLE IF NOT EXISTS contact_group (
//     id         INTEGER PRIMARY KEY AUTOINCREMENT
//                        NOT NULL,
//     contact_id INTEGER REFERENCES contacts (id) ON DELETE CASCADE,
//     group_id   INTEGER REFERENCES [group] (id) ON DELETE CASCADE
// );`

// arrQuery.push(contactsGroup);

// for (let i=0; i < arrQuery.length; i++){
//     const query = arrQuery[i];
//     db.run(query, (err) =>{x``
//         if (err) throw err;
//         console.log(`Succesfully added new table to database`)
//     })
// }


module.exports = db;