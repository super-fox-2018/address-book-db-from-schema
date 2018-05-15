let model = require('./model.js')
let view = require('./view.js')


class Controller{
	constructor(){

	}
	static addContact(userData){
		model.addContact(userData,(data,err)=>{
		view.addContact(data)
		})
	}
	static updateContact(id,userData){
		model.updateContact(id,userData,(data,err)=>{
			view.updateContact(data)
		})
	}
	static deleteContact(id){
		model.deleteContact(id,(data,err)=>{
			view.updateContact(data)
		})
	}
	static showContact(userData){
		
	}
	static addGroup(groupData){
		model.addGroup(groupData,(data,err)=>{
			view.addGroup(data)
		})
	}
	static deleteGroup(id){

	}
}

module.exports = Controller
