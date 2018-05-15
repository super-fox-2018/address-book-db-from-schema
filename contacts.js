const db = require('./');

class Contact {
    constructor(name, company, phone, email, address) {
        this.id = 0
        this.name = name;
        this.company = company
        this.phone = phone
        this.email = email
        this.address = address
    }

    save(callback) {
        let query = `INSERT INTO contacts (name, company, phone, email, address) `;
        query += `VALUES ("${this.name}", "${this.company}", "${this.phone}", "${this.email}",`
        query += `"${this.address}");`
        let name = this.name
        db.run(query, function (err) {
            if (err) throw err;
            callback(name)
        })
    }
    static update(id, param, value, callback) {
        let query = `UPDATE contacts SET `;
        query += `${param} = "${value}" `;
        query += `WHERE id = ${id};`
        db.run(query, function (err) {
            if (err) throw err;
            Contact.readContact(id, function(rowCont){
                callback(rowCont)
            })
        })
    }
    static retrieveContact(callback) {
        let query = `SELECT * FROM contacts;`
        db.all(query, [], (err, contacts) => {
            if (err) throw err;
            callback(contacts)
        })
    }
    static readContact(id, callback) {
        let query = `SELECT * FROM contacts where id =`;
        query += `${id}`;
        db.get(query, [], (err, rowCont) => {
            if (err) throw err;
            return callback(rowCont);
        })
    }
    static delete(id, callback){
        let query = `DELETE FROM contacts where id =`;
        query += `${id}`;
        db.run(query, function (err) {
            if (err) throw err;
            callback(this.changes)
        })
    }
    // static addGroup(contactId, groupId){
    //     let query = `INSERT INTO contact_group VALUES (`;
    //     query += `${contactId}, ${groupId});`
    //     db.run(query, function (err) {
    //         if (err) throw err;
    //         callback(name)
    //     })
    // }
}

// let contact = new Contact("Alex");
// contact.company = 'PT ALAM Makmur';
// contact.phone = '081888888888';
// contact.email = 'alex@gmail.com';
// contact.save();

module.exports = Contact;
