const db = require('./');

class ContactGroup {
    constructor(contactId, groupId) {
        this.contactId = contactId;
        this.groupId = groupId
    }
    addContactGroup(callback) {
        let query = `INSERT INTO contact_group VALUES (`;
        query += `null, ${this.contactId}, ${this.groupId});`
        db.run(query, function (err) {
            if (err) throw err;
            callback(1)
        })
    }
}

module.exports = ContactGroup;