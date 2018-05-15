const Contact = require("./contact.js")
const Group = require("./group.js")
const View = require("./view.js")

class Controller {

	static addContact(name,company,phone,email) {
		Contact.addContact(name,company,phone,email,function(err,success) {
			if(err) {
				View.errorMessage(err)
			}else{
				View.addContact(success)
			}
		})
	}

	static updateContact(tableName,columnName,value,id) {
		Contact.updateContact(tableName,columnName,value,id,function(err,success) {
			if(err) {
				View.errorMessage(err)
			}else{
				View.updateContact(success)
			}
		})
	}

	static deleteContact(tableName,id ) {
		Contact.deleteContact(tableName,id,function(err,result){
			if(err) {
				View.errorMessage(err)
			}else{
				View.deleteContact(result)
			}
		})
	 }

	 static showContact(id) {
	 	Contact.showContact(id,function(err,result) {
	 		if(err) {
	 			View.errorMessage(err)
	 		}else{
	 			View.showContact(result)
	 		}
	 	})
	 }

	 static addGroup(tableName,name) {
	 	Group.addGroup(tableName,name,function(err,result){
	 		if(err) {
	 			View.errorMessage(err)
	 		}else{
	 			View.addGroup(result)
	 		}
	 	})
	 }

	 static updateGroup(tableName,value,id) {
	 	Group.updateGroup(tableName,value,id,function(err,result) {
	 		if(err) {
	 			View.errorMessage(err)
	 		}else{
	 			View.updateGroup(result)
	 		}
	 	})
	 }

	 static deleteGroup(tableName,id) {
	 	Group.deleteGroup(tableName,id,function(err,result) {
	 		if(err) {
	 			View.errorMessage(err)
	 		}else{
	 			View.deleteGroup(result)
	 		}
	 	})
	 }

	 static showGroup(id) {
	 	Group.showGroup(id,function(err,result) {
	 		if(err) {
	 			View.errorMessage(err)
	 		}else{
	 			View.showGroup(result)
	 		}
	 	})
	 }

}


module.exports = Controller