let model = require('./model.js')
let control = require('./controller.js')
// control = new control()
// model = new model()


let controlContact = new control.Contacts()


let input = process.argv[2]
let argv = process.argv




if (input === 'addcontact') {
  controlContact.addContactku(argv[3], argv[4], argv[5], argv[6])
}

if (input === 'delete') {
  controlContact.delete(argv[3])
}

if (input === 'add.group') {
  controlContact.buatGroup(argv[3])
}


if (input === 'assign') {
  controlContact.assignGroup(argv[3], argv[4])

}


if (input === 'show') {
  // controlContact.assignGroup(argv[3], argv[4])
  controlContact.lihatkontak(argv[3])

}
