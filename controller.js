const Model = require("./model.js")
const View = require("./view.js")

class Controller{

    static showHelp(){
        View.help();
    }

    static addContact(name,number){
        Model.Contact.addContactProcedure(name,number,function(err){
            if(err) throw err;
            View.sendMessage('contact has been added to the list!')
        })
    }
    static updateContact(id,name,number){
        Model.Contact.updateContactProcedure(id,name,number,function(err){
            if(err === 'no contact found') return View.sendMessage(err);
            if(err) throw err;
            View.sendMessage('contact has been updated!')
        })
    }
    static removeContact(id){
        Model.Contact.removeContactProcedure(id,function(err){
            if(err) throw err;
            View.sendMessage('contact has been deleted!')
        })
    }
    static showContact(id){
        Model.Contact.showContactProcedure(id,function(err,contactFound){
            if(err) throw err;
            View.sendMessage(contactFound)
        })
    }
    static assignContact(listcontact,group){
        Model.Contact.assignContactProcedure(listcontact,group,function(message){
            View.sendMessage(message)
        })
    }
    static kickContact(listcontact,group){
        Model.Contact.kickContactProcedure(listcontact,group,function(message){
            View.sendMessage(message)
        })
    }

    static addGroup(name){
        Model.Group.addGroupProcedure(name,function(err){
            if(err) throw err;
            View.sendMessage('group has been added to the list!')
        })
    }
    static updateGroup(id,name){
        Model.Group.updateGroupProcedure(id,name,function(err){
            if(err === 'no group found') return View.sendMessage(err);
            if(err) throw err;
            View.sendMessage('group has been updated!')
        })
    }
    static removeGroup(id){
        Model.Group.removeGroup(id,function(err){
            if(err) throw err;
            View.sendMessage('group has been deleted!')
        })
    }
    static showGroup(id){
        Model.Group.showGroup(id,function(err,groupFound){
            if(err) throw err;
            View.sendMessage(groupFound)
        })
    }
}

module.exports = Controller;