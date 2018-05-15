class View{
	constructor(){
		
	}
	static addContact(data){
		//console.log(data)
		console.log(`Berhasil menambahkan data ${data[0]} kedalam contact`)
	}
	static updateContact(data){
		console.log(`Berhasil update data ${data[0]} kedalam contact`)
		
	}
	static deleteContact(userData){
		console.log(`Berhasil delete data ${data[0]}`)
	}
	static showContact(userData){
		
	}
	static addGroup(data){
		console.log(`Berhasil menambahkan contact id ${data} dari dalam group`)	
	}
	static deleteGroup(id){

	}
}


module.exports = View