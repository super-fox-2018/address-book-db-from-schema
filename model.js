const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./address_book.db');

class Contacts {
  controller() {


  }



  makeContacts(name, company, phone, email) {
    let query = `INSERT INTO Contacts(name,company, phone, email) VALUES ("${name}","${company}", "${phone}", "${email}")`
    db.run(query, function(err) {
      if (err) throw err
    })





  }

}

module.exports = Contacts
