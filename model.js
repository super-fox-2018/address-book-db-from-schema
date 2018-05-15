const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./address_book.db')

class Model{
	constructor(){
		
	}
	static addContact(data,cb){
		let queryAdd = `insert into contacts (name,company,phone,email)
						values ("${data[0]}","${data[1]}","${data[2]}","${data[3]}")`
		db.run(queryAdd,(err)=>{
			cb(data)
		})
	}
	static updateContact(id,data,cb){
		let queryUpdate = `update contacts set name = "${data[0]}", company = "${data[1]}", phone = "${data[2]}", email = "${data[3]}"
						   where id=${id}`
		db.run(queryAdd,(err)=>{
			cb(data)
		})
	}
	static deleteContact(id,cb){
		let queryDelete = `delete from contacts where id = ${id}`
		db.run(queryDelete,(err)=>{
			cb(id)
		})
	}
	static showContact(userData){
		
	}
	static addGroup(data,cb){
		let queryAdd = `insert into contacts (groupName)
						values ("${data[0]}")`
		db.run(queryAdd,(err)=>{
			cb(data)
		})
	}
	static deleteGroup(id,cb){

	}
}


module.exports = Model