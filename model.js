var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./group.db');


class Model {
  static contact(data, cb) {
    let name = data[0]
    let company = data[1]
    let phone = data[2]
    let email = data[3]
    let queryContact = `INSERT INTO contacts VALUES(null,'${name}','${company}','${phone}','${email}')`
    db.run(queryContact, function(err) {
      if (err) {
        cb(null, err)
      } else {
        var result = `data berhasil di input, total contact ${this.lastID}`
        cb(result, null)
      }
    })
  }

  static group(dataGroup,cb){
    let name = dataGroup
    let queryGroup = `INSERT INTO groups VALUES (null,'${name}')`
    db.run(queryGroup,function(err){
      if (err) {
        cb(null,err)
      }
      else {
        var result = `data berhasil di input, total group ${this.lastID}`
        cb(result,null)
      }
    })
  }

  static contactShow(findContact,cb){
    let id = findContact
    let queryAll = `SELECT * FROM contacts WHERE id = ${findContact}`
    db.all(queryAll,(err,data)=>{
      if (err) {
        cb(null,err)
      }
      else {
        cb(data)
      }
    })
  }

  static contactDelete(dataDelete,cb){
    let idDelete = +(dataDelete)
    let queryDelete = `DELETE FROM contacts WHERE id = ${idDelete}`
    db.run(queryDelete,(err)=>{
      if (err) {
        cb(null,err)
      }
      else {
        var result = `hapus data contact berhasil`
        cb(result)
      }
    })
  }
}








module.exports = Model
