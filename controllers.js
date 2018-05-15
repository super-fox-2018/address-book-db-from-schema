const Model = require('./models.js')
const View = require('./views.js')

class Controller{
    static createContact(first_name, last_name, email, phone, group_name){
        Model.createContact(first_name, last_name, email, phone, group_name)
        View.createContact()
    }

    static deleteContact(id){
        Model.deleteContact(id)
        View.deleteContact(id)
    }

    static updateContact(first_name, last_name, email, phone, group_name, idContact){
        Model.updateContact(first_name, last_name, email, phone, group_name, idContact)
        View.updateContact(idContact)
    }

    static showContact(){
        Model.showContact(function(dataContact){
            View.showContact(dataContact)
        })
    }

    static showGroup(){
        Model.showGroup(function(dataGroup){
            View.showGroup(dataGroup)
        })
    }

    static createNewGroup(newGroupName){
        Model.createNewGroup(newGroupName)
        View.createNewGroup(newGroupName)
    }

    static deleteGroup(name){
        Model.deleteGroup(name)
        View.deleteGroup(name)
    }
}

module.exports = Controller