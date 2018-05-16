const Controller = require('./controller/controller.js');
const argv = process.argv.slice(2)
const command = argv[0] || null;
const param = argv.slice(1);

switch(command) {
  case 'add':
    Controller.registerContact(param);
    break;
  case 'show':
    Controller.showContact(param);
    break;
  case 'update':
    Controller.updateContact(param);
    break;
  case 'delete':
    Controller.deleteContact(param);
    break;
  case 'assign':
    Controller.assignToGroup(param);
    break;
  case 'help':
    Controller.showHelp();
    break;
  default:
    Controller.showHelp();
}

// driver code
// let bob = new Contact({name: "Alex"});
// contact.id // null
// contact.save() // executes INSERT statement and makes a new record
// contact.id // let's say 20

// contact.name = "Bob"
// contact.update(); // executes UPDATE statement