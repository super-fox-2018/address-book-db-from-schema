const controller = require ("../Controller/controller.js");
const Group = require("./groupModel.js");
const Contact = require("./contactModel.js");
var path = require('path');
var directories = path.dirname("/Users/rin08.ng/Desktop/Hacktiv8/Phase1/Week3/address-book-db-from-schema/setup.js");
const db = require (directories)

class Contact_Group{
  constructor(){

  }

  static assign(contactId, groupId, cb){
    let assignQuery =`INSERT INTO contact_group (contact_id, group_id)
                      VALUES (${contactId},${groupId});`

    db.run(assignQuery, function(err){
      if(err) throw err;
        let getAssignedGroup = `SELECT contacts.name AS contactName, groups.name AS groupName FROM contact_group
                                JOIN contacts ON contact_group.contact_id = contacts.id
                                JOIN groups ON contact_group.group_id = groups.id
                                WHERE contact_group.contact_id = ${contactId};`

        db.all(getAssignedGroup, function(err, assignedGroup){
          if(err) throw err;
          cb(assignedGroup);
        })
    })
  }

  static delete(id){
    let deleteQuery = `DELETE FROM contact_group
                       WHERE contact_group.id = ${id};`

    db.run(deleteQuery, function(err){
      if(err) throw err
    })
  }
}

module.exports = Contact_Group;