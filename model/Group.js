const fs = require('fs');
const db = require('../db');

class Group {
  static readJSONData() {
    fs.readFile('./groups.json', 'utf8', function(err, groups) {
      if (err) throw err;
      let parsed = JSON.parse(groups)
      callback(parsed);
    })
  }

  static writeData(query) {
    db.run(query, (err) => {
      if (err) throw err;
      console.log("Data saved successfully.")
    })
  }

  static addFromJSON() {
    Group.readJSONData((groups) => {
      for (let i = 0; i < groups.length; i++) {
        let group = groups[i];
        console.log("JSON data ==>", group);
        let query = `INSERT INTO groups (name)
                     VALUES ('${group.name}')`;
        Group.writeData(query);
      }
    })
  }
}

module.exports = Group;