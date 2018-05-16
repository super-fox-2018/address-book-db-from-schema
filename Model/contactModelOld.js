const controller = require ("../Controller/controller.js");
const group = require("./groupModel.js");
var path = require('path');
var directories = path.dirname("/Users/rin08.ng/Desktop/Hacktiv8/Phase1/Week3/address-book-db-from-schema/setup.js");
const db = require (directories)

class Contact{
  constructor(){
    // this._name = contactObj.name;
    // this.company = contactObj.company;
    // this.phone = contactObj.phone;
    // this.email = contactObj.email;
    // this.name = "";
    // this._id = null;
  }

  static save(contactObj){
    var classThis = this;
    let insertName = `INSERT INTO contacts (name,company,phone,email)
                      VALUES ('${contactObj._name}', '${contactObj.company}','${contactObj.phone}','${contactObj.email}');`

    db.run(insertName, function(err){
      if(err) throw err;
    })
  }

  static getId(cb){
    let getId = `SELECT * FROM contacts
                   WHERE contacts.name = '${this._name}';`
    db.all(getId, function(err, result){
      if (err) throw err;
        cb(result);
    })
  }

  get id(){
    var classThis = this;
    this.getId(function(result){
      if(result.length !== 0){
        classThis._id = result[0].id;
      }
      console.log(classThis._id)
    })
  }


  static update(){
    let classThis = this;
    this.getId(function(idResult){
      let updateName = `UPDATE contacts
                        SET name =  '${classThis.name}'
                        WHERE id = ${idResult[0].id};`

      db.run(updateName, function(err){
        if (err) throw err;
      })
    })
  }

  static show(){
    let showAllQuery = `SELECT contacts.*, groups.name AS groupName FROM contacts
                        LEFT JOIN contact_group ON contact_group.contact_id = contacts.id
                        LEFT JOIN groups ON contact_group.group_id = groups.id;`

    db.all(showAllQuery, function(err,data){
      if(err) throw err;
      console.log(data);
    })
  }


}

let obj = {
  name:"pikachu",
  company:"pokemon",
  phone:"239490",
  email:"pikachu@gmail.com"
}

Contact.save(obj);