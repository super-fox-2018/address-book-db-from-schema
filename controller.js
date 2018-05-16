const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./address_book.db');
var modelku = require('./model.js');
modelku = new modelku()
var view = require('./view.js');
view = new view()

class Contacts {
  constructor() {
    // this.name = contactData.name
    // this.company = contactData.company
    // this.phone = contactData.phone
    // this.email = contactData.email
  }


  addContactku(name, company, phone, email) {
    modelku.makeContacts(name, company, phone, email)
  }


  save() {
    //
    // const savedata = `INSERT INTO Contacts (name, company, phone, email)
    //              VALUES ('${this.name}', '${this.company}', '${this.phone}','${this.email}')`;
    // db.run(savedata, function(err) {
    //   if (err) throw err;
    // });

  }


  delete(id) {
    modelku.deleteContacts(id);
  }


  //
  //   Update() {
  //     const update = `UPDATE Contacts SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
  // WHERE CustomerID = 1;`
  //   }



  // ---------------------- GROUP -------------------- //

  buatGroup(name) {
    modelku.makeGroups(name)
  }


  assignGroup(name, group) {
    modelku.addtoGroup(name, group)
  }


  lihatkontak(username) {

    modelku.showContacts(username)

  }




}




//
//
// let andi = new Contacts({
//   name: 'suar',
//   company: 'Hacktiv81',
//   phone: '07177670071',
// })
// console.log(andi)
// andi.save()

module.exports = {
  Contacts

}
