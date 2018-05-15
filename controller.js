const model = require('./model.js')
const View = require('./view.js')

class Controller{
    static createContactBook(name,phone){
        model.createContact(name,phone)
        View.create(name,phone)
    }
}

module.exports = Controller