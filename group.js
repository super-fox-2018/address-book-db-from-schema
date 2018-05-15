const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./address_book.db');

class Group {
  add() {
    let query = `INSERT INTO groups (name) VALUES ('${this.name}');`;
    db.run(query, function(err) {
      console.log(this.lastID);
      console.log('Successfully add new group');
    });
  }

  delete() {
    let query = `DELETE FROM groups WHERE id = '${this.id}';`;
    db.run(query, function(err) {
      console.log(`Successfully delete group id: ${this.id}`);
    });
  }

  update() {
    db.run(`UPDATE groups SET name = '${this.name}' WHERE id = '${this.id}';`);
    console.log(`Successfully update contact id: ${this.id}`);
  }
}

module.exports = Group;
