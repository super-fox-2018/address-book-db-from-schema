let model = require('./model.js')
let control = require('./controller.js')
control = new control()
model = new model()


let input = process.argv[2]
let argv = process.argv



if (input === 'addcontact') {


  control.addcontact(argv[3], argv[4], argv[5], argv[6])


}
