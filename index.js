const contactController = require('./controllers/contactController');
const groupController = require('./controllers/groupController');
const Parser = require('./helpers/inputParser');
const argv = Parser.parse(process.argv);

switch(argv.option) {
  case "addContact":
    contactController.handleAddContact(argv.props);
    break;
  case "updateContact":
    contactController.handleUpdateContact(argv.prefix, argv.props);
    break;
  case "deleteContact":
    contactController.handleDeleteContact(argv.prefix, argv.props);
    break;
  case "getContact":
    contactController.handleGetContact(argv.prefix, argv.props);
    break;
  case "addGroup":
    groupController.handleAddGroup(argv.props);
    break;
  case "updateGroup":
    groupController.handleUpdateGroup(argv.prefix, argv.props);
    break;
  case "deleteGroup":
    groupController.handleDeleteGroup(argv.prefix, argv.props);
    break;
  case "getGroup":
    groupController.handleGetGroup(argv.prefix, argv.props);
    break;
  case "assign":
    contactController.handleAssign(argv.props);
  default:
}