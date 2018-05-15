const Controller = require('./controller');

let args = process.argv.slice(2);
let task = args[0];
let input = args.slice(1);

switch (task) {
case 'add':
  if (input[0] === 'contact') {
    Controller.addContact(input[1], input[2]);
  }
  break;
case 'delete':
  if (input[0] === 'contact') {
    Controller.deleteContact(input[1]);
  }
  break;
case 'update':
  if (input[0] === 'contact') {
    Controller.updateContact(input[1], input[2], input[3]);
  }
  break;
default:
  // statements_def
  break;
}
