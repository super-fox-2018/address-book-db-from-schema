var modelku = require('./model.js')
modelku = new modelku()
var view = require('./view.js')
view = new view()

class Controller {




  addcontact(name, company, phone, email) {

    modelku.makeContacts(name, company, phone, email)


  }



}






module.exports = Controller
