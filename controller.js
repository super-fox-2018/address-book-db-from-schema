const Model = require('./model');
const View = require('./view');

class Controller {
  static addToContact(data) {
    Model.contact(data, (err, res) => {
      if (err) {
        View.showError(err)
      }
      else {
        View.showAddContact(res)
      }
    })
  }

  static addToGroup(dataGroup){
    // console.log(dataGroup);
    Model.group(dataGroup,(err,res)=>{
      if (err) {
        View.showError(err)
      }
      else {
        View.showGroup(res)
      }
    })
  }

  static showContact(show){
    Model.contactShow(show,(err,res)=>{
      if (err) {
        View.showError(err)
      }
      else {
        View.showPersonContact(res)
      }
    })
  }

  static deleteContact(dataDelete){
    Model.contactDelete(dataDelete,(err,res)=>{
      if (err) {
        View.showError(err)
      }
      else {
        View.showDelete(res)
      }
    })
  }
}


module.exports =Controller
