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


  deleteContacts(id) {
    const deletes = `DELETE FROM Contacts WHERE id = '${id}';`
    db.run(deletes, function(err) {
      if (err) throw err;
    });
  }


  showContacts(username) {

    let lihat = `SELECT * FROM Contacts WHERE name = "${username}"`
    db.get(lihat, function(err, namacontact) {
      if (err) {
        console.log(err);
      }
      console.log(namacontact)

    })
  }



  makeGroups(name) {
    let query = `INSERT INTO Groups(name) VALUES ("${name}")`
    db.run(query, function(err) {
      if (err) throw err
    })

  }






  addtoGroup(username, group) {

    //, groupname

    // SELECT * FROM Groups where name = 'HACKTIV8'


    let cariid = `SELECT id FROM Contacts WHERE name = "${username}"`
    db.get(cariid, function(err, namacontact) {
      if (err) {
        console.log(err);
      }
      let idkontak = namacontact.ID


      //cari group ID
      db.get(`SELECT * FROM Groups where name = '${group}'`, function(err, grup) {
        if (err) {
          console.log(err);
        }

        let groupid = grup.id
        let tambahgrup = `INSERT INTO contact_group (contact_id, group_id) VALUES ("${idkontak}","${groupid}")`
        db.run(tambahgrup, function(err) {
          if (err) throw err
        })






      })








    })



  }





}






module.exports = Contacts
