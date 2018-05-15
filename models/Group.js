const db = require('./../database');

class Group {
  constructor(group) {
    this.id = null;
    this.name = group.name;
  }

  save () {
    const group = this;
    const values = Object.keys(group).reduce((acc, key) => {
      if (group[key]) acc.push(group[key]);
      return acc;
    }, []);
    const save = `INSERT INTO groups (name)
                  VALUES (?)`;
    return new Promise(function(resolve, reject) {
      db.run(save, values, function(err) {
        if (err) reject(err);
        db.get(`SELECT * FROM groups WHERE id = ${this.lastID}`, (err, group) => {
          if (err) reject(err);
          resolve(group);
        });
      });
    });
  }

  static add(group) {
    const values = Object.keys(group).reduce((acc, key) => {
      if (group[key]) acc.push(group[key]);
      return acc;
    }, []);
    const addQuery = `INSERT INTO groups (name)
                  VALUES (?)`;
    return new Promise(function(resolve, reject) {
      db.run(addQuery, values, function(err) {
        if (err) reject(err);
        db.get(`SELECT * FROM groups WHERE id = ${this.lastID}`, (err, group) => {
          if (err) reject(err);
          resolve(group);
        });
      });
    });
  }

  static update(updatePrefix, updateData) {
    const prefix = Object.keys(updatePrefix)[0];
    let updateQuery = 'UPDATE groups SET ';
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
        const groupQuery = `SELECT * FROM groups 
                              WHERE ${prefix} = ${updatePrefix[prefix]};`;
        db.get(groupQuery, (err, groups) => {
          if (err) reject(err);
          resolve(groups);
        });
      });
    });
  }

  static delete(deletePrefix) {
    const prefix = Object.keys(deletePrefix)[0];
    const groupQuery = `SELECT * FROM groups 
                          WHERE ${prefix} = ${deletePrefix[prefix]};`;
    return new Promise(function(resolve, reject) {
      db.get(groupQuery, (err, group) => {
        if (err) reject(err);
        const deleteQuery = `DELETE FROM groups 
                              WHERE ${prefix} = ${deletePrefix[prefix]};`;
        db.run(deleteQuery, (err) => {
          if (err) reject(err);
          resolve(group);
        });
      });
    });
  }

  static get(getPrefix) {
    const prefix = Object.keys(getPrefix)[0];
    const getQuery = `SELECT groups.*, contacts.username AS memberName FROM groups
                      LEFT JOIN contacts_groups ON groups.id = contacts_groups.group_id
                      LEFT JOIN contacts ON contacts_groups.contact_id = contacts.id
                      WHERE groups.${prefix} = ${getPrefix[prefix]};`;
    return new Promise(function(resolve, reject) {
      db.all(getQuery, (err, groupDetails) => {
        if (err) reject(err);
        resolve(groupDetails);
      });
    });
  }
}

module.exports = Group;