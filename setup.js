const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./addressBook.db')
const fs = require('fs')

db.run(`CREATE TABLE IF NOT EXISTS contacts (
    id integer PRIMARY KEY AUTOINCREMENT,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL UNIQUE,
    phone text NOT NULL UNIQUE,
    group_name text
);`)

db.run(`CREATE TABLE IF NOT EXISTS groups (
	id integer PRIMARY KEY AUTOINCREMENT,
	name text NOT NULL
);`)

db.run(`CREATE TABLE IF NOT EXISTS contact_groups (
	contact_id integer,
	group_id integer,
	PRIMARY KEY (contact_id, group_id),
	FOREIGN KEY (contact_id) REFERENCES contacts (id) 
			ON DELETE CASCADE ON UPDATE NO ACTION,
	FOREIGN KEY (group_id) REFERENCES groups (id) 
			ON DELETE CASCADE ON UPDATE NO ACTION
);`)

// fs.readFile('./contacts.json','utf8', function(err, dataDummy){
//     if (err) throw err
//     let data = JSON.parse(dataDummy)
//     // console.log(dataDummy)
//     for(let i=0; i<data.length; i++){
//         db.run(`INSERT INTO contacts (first_name, last_name, email, phone, group_name) VALUES ('${data[i].first_name}', '${data[i].last_name}', '${data[i].email}', '${data[i].phone}', '${data[i].group_name}' )`)
//     }
// })

// fs.readFile('./groups.json', 'utf8', function(err, groups){
//     if(err) throw err
//     let dataGroup = JSON.parse(groups)
//     for(let i=0; i<dataGroup.length; i++){
//         db.run(`INSERT INTO groups (name) VALUES ('${dataGroup[i].name}')`)
//     }
// })

