const db = require('./db');
const fs = require('fs');


db.run(`CREATE TABLE IF NOT EXISTS contacts(
    id integer PRIMARY KEY AUTOINCREMENT,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL UNIQUE,
    phone text NOT NULL UNIQUE);
    `, function(err){
        if(err) throw err;
    });

db.run(`CREATE TABLE IF NOT EXISTS groups(
    id integer PRIMARY KEY AUTOINCREMENT,
    name text NOT NULL);`, function(err){
        if(err) throw err;
    });

db.run(`CREATE TABLE IF NOT EXISTS contact_groups(
    contact_id integer,
    group_id integer,
    PRIMARY KEY (contact_id, group_id),
    FOREIGN KEY (contact_id) REFERENCES contacts (id)
        ON DELETE CASCADE ON UPDATE NO ACTION,
    FOREIGN KEY (group_id) REFERENCES groups(id)
        ON DELETE CASCADE ON UPDATE NO ACTION);`, function(err){
            if(err) throw err;
        });

const argv = process.argv;
const command = argv.slice(2);

console.log(command);

if(command[0]==='add'){

    fs.readFile('./contacts.json', 'utf8', function(err, contacts){
        if(err) throw err;
        let objContacts = JSON.parse(contacts);
        
        for(let a = 0; a < objContacts.length; a++){
            let first_name = objContacts[a].first_name;
            let last_name = objContacts[a].last_name;
            let email = objContacts[a].email;
            let phone = objContacts[a].phone;
            let query = `INSERT INTO contacts (first_name, last_name, email, phone) VALUES ("${first_name}","${last_name}","${email}","${phone}")`
            db.run(query, function(err){
                if(err) throw err;
            })
        }
})

}

