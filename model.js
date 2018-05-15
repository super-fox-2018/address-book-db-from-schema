const fs = require('fs')
const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('./address_book.db');

class Book{

    static createContact(name,phone){
        let query = `INSERT INTO contacts(name,phone_number) VALUES ("${name}","${phone}")`
        db.run(query,function(err){
            if (err) throw err
        })
    }
}

module.exports = Book