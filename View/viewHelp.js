const Controller = require ('../Controller/controllerHelp.js');

class ViewHelp{
  constructor(){

  }
  static displayHelp(){
    console.log("- create contact <name> <company> <phone> <email>");
    console.log("- create group <name>");
    console.log("- update contact <column> <value> <contactId>");
    console.log("- update group <value> <groupId>");
    console.log("- delete contact||group||contact_group <contactId>||<groupId>||<contact_groupId>");
    console.log("- show contact || group");
    console.log("- assign contact_group <contactId> <groupId>");
  }
}

module.exports = ViewHelp;