const controller = require ("../Controller/controller.js");
var path = require('path');
var directories = path.dirname("/Users/rin08.ng/Desktop/Hacktiv8/Phase1/Week3/address-book-db-from-schema/setup.js");
const db = require (directories)

class Contact{
  constructor(){
  }

  static create(contactObj, cb){
    var classThis = this;
    let insertName = `INSERT INTO contacts (name,company,phone,email)
                      VALUES ('${contactObj.name}', '${contactObj.company}','${contactObj.phone}','${contactObj.email}');`

    db.run(insertName, function(err){
      if(err) throw err;
      cb(contactObj);
    })
  }

  static update(column, value, id, cb){
    column = column.toLowerCase();
    value = value.toLowerCase();

    let updateName = `UPDATE contacts
                      SET '${column}' =  '${value}'
                      WHERE id = ${id};`

    db.all(updateName, function(err, updateData){
      if (err) throw err;
      cb(column, value, id, updateData);
    })
  }

  static show(cb){
    let showAllQuery = `SELECT contacts.*, groups.name AS groupName FROM contacts
                        LEFT JOIN contact_group ON contact_group.contact_id = contacts.id
                        LEFT JOIN groups ON contact_group.group_id = groups.id;`

    db.all(showAllQuery, function(err,showData){
      if(err) throw err;
      cb(showData)
    })
  }

  static delete(id, cb){
    let deleteQuery = `DELETE FROM contacts
                       WHERE contacts.id = ${id};`

    db.run(deleteQuery, function(err){
      if(err) throw err
      let deleteQueryContactGroup = `DELETE FROM contact_group
                                    WHERE contact_group.contact_id = ${id};`

      db.run(deleteQueryContactGroup, function(err){
        if(err) throw err;
        cb(id);
      })
    })
  }


}

// let obj = {
//   name:"vaporeon",
//   company:"pokemon",
//   phone:"1234666",
//   email:"vaporeon@gmail.com"
// }
// Contact.delete(2, function(id){
//   console.log("Deleted data from contacts at id = " + id);
// });
// Contact.create(obj, function(contactObj){
//   console.log("INSERTED NEW CONTACT: " + contactObj.name);
// });
// Contact.update('phone', obj.phone, 1);
// Contact.show(function(showData){
//   console.log(showData);
// });

module.exports = Contact;