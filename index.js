const Controller = require('./controller')

const param = process.argv[2];
const arrParam = process.argv.slice(3);

switch (param){
    case 'addContact':
          if (arrParam){
              Controller.addContact(arrParam);
          }
          break;
    case 'showContact':
          if (arrParam){
              Controller.showContact(arrParam)
          }
          break;
    case 'updateContact':
          if (arrParam){
            Controller.updateContact(arrParam)
          }
          break;
    case 'deleteContact':
          if (arrParam){
            Controller.deleteContact(arrParam)
          }
          break;
    case 'assignContact':
          if (arrParam){
            Controller.assignContact(arrParam)
          }
          break;
    default:   
          
}
