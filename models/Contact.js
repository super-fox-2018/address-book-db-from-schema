const db = require('./../database');

class Contact {
  constructor(contact) {
    this.id = null;
    this.username = contact.username;
    this.phone_number = contact.phone_number;
  }

  save () {
    const contact = this;
    const values = Object.keys(contact).reduce((acc, key) => {
      if (contact[key]) acc.push(contact[key]);
      return acc;
    }, []);
    const save = `INSERT INTO contacts (username, phone_number)
                  VALUES (?,?)`;
    return new Promise(function(resolve, reject) {
      db.run(save, values, function(err) {
        if (err) reject(err);
        db.get(`SELECT * FROM contacts WHERE id = ${this.lastID}`, (err, contact) => {
          if (err) reject(err);
          resolve(contact);
        });
      });
    });
  }

  static add(contact) {
    const values = Object.keys(contact).reduce((acc, key) => {
      if (contact[key]) acc.push(contact[key]);
      return acc;
    }, []);
    const add = `INSERT INTO contacts (username, phone_number)
                  VALUES (?,?)`;
    return new Promise(function(resolve, reject) {
      db.run(add, values, function(err) {
        if (err) reject(err);
        db.get(`SELECT * FROM contacts WHERE id = ${this.lastID}`, (err, contact) => {
          if (err) reject(err);
          resolve(contact);
        });
      });
    });
  }

  static update(updatePrefix, updateData) {
    const prefix = Object.keys(updatePrefix)[0];
    let updateQuery = 'UPDATE contacts SET ';
    const keys = Object.keys(updateData);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      updateQuery += `${key} = '${updateData[key]}'`;
      if (i < keys.length - 1) updateQuery += ', ';
      else updateQuery += ' ';
    }

    updateQuery += `WHERE ${prefix} = ${updatePrefix[prefix]};`;
    return new Promise(function(resolve, reject) {
      db.run(updateQuery, (err) => {
        if (err) reject(err);
        const contactQuery = `SELECT * FROM contacts 
                              WHERE ${prefix} = ${updatePrefix[prefix]};`;
        db.get(contactQuery, (err, contact) => {
          if (err) reject(err);
          resolve(contact);
        });
      });
    });
  }

  static delete(deletePrefix) {
    const prefix = Object.keys(deletePrefix)[0];
    const contactQuery = `SELECT * FROM contacts 
                          WHERE ${prefix} = ${deletePrefix[prefix]};`;
    return new Promise(function(resolve, reject) {
      db.get(contactQuery, (err, contact) => {
        if (err) reject(err);
        const deleteQuery = `DELETE FROM contacts 
                              WHERE ${prefix} = ${deletePrefix[prefix]};`;
        db.run(deleteQuery, (err) => {
          if (err) reject(err);
          resolve(contact);
        });
      });
    });
  }

  static get(getPrefix) {
    const prefix = Object.keys(getPrefix)[0];
    const getQuery = `SELECT contacts.*, groups.name AS groupName FROM contacts
                      LEFT JOIN contacts_groups ON contacts.id = contacts_groups.contact_id
                      LEFT JOIN groups ON contacts_groups.group_id = groups.id
                      WHERE contacts.${prefix} = ${getPrefix[prefix]};`;
    return new Promise(function(resolve, reject) {
      db.all(getQuery, (err, contactDetails) => {
        if (err) reject(err);
        resolve(contactDetails);
      });
    });
  }

  static assign(ids, groupId) {
    return new Promise(function(resolve, reject) {
      for (let i = 0; i < ids.length; i += 1) {
        const assignQuery = `INSERT INTO contacts_groups (contact_id, group_id)
                             VALUES (?, ?);`;
        db.run(assignQuery, [ids[i], groupId], (err) => {
          if (err) reject(err);
          if (i === ids.length - 1) {
            db.all(`SELECT * FROM contacts 
            WHERE id IN (${ids.join(',')});`, (err, contacts) => {
              if (err) reject(err);
              resolve(contacts);
            });
          }
        });
      }
    });
  }
}

module.exports = Contact;