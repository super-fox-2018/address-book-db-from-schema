const Controller = require('./controller.js')
const View = require('./view.js')
let argv = process.argv

if(argv[2] === 'create'){
    Controller.createContactBook(argv[3],argv[4])
}