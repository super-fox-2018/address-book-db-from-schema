const controllerHelp = require("./Controller/controllerHelp.js");
// const contactController = require("./Controller/controllerContact.js");
// const groupController = require("./Controller/controllerGroup.js");
// const contactGroupController = require("./Controller/controllerContactGroup.js");
const argv = process.argv;

let task = argv[2];
let category = argv[3];
switch(task){
  case "create":{
    if(category === "contact"){
      let objContact = {
        name: argv[4],
        company : argv[5],
        phone: argv[6],
        email: argv[7],
      }
      contactController.create(objContact);
    }
    else if(category === "group"){
      let name = argv[4]
      groupController.create(name);
    }
    break;
  }

  case "update":{
    if(category === "contact"){
      let column = argv[4];
      let value = argv[5];
      let id = argv[6];
      contactController.update(column, value, id);
    }
    else if(category === "group"){
      let value = argv[4];
      let id = argv[5];
      groupController.update( value, id);
    }
    break;
  }

  case "delete":{
    let id = argv[4];
    if(category === "contact"){
      contactController.delete(id);
    }
    else if(category === "group"){
      groupController.delete(id);
    }
    else if(category === "contact_group"){
      contactGroupController.delete(id);
    }
    break;
  }

  case "show":{
    if(category === "contact"){
      contactController.show();
    }
    else if(category === "group"){
      groupController.show();
    }
    break;
  }

  case "assign":{
    let contact_id = argv[4];
    let group_id = argv[5];
    contactGroupController.assign(contact_id, group_id);
    break;
  }
  default:{
    controllerHelp.help();
  }
}


