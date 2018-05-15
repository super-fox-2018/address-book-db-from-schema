var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./address_book.db');


class Group{

	static addGroup(tableName,name,cb) {
		let queryAdd = `INSERT INTO ${tableName} VALUES(null,"${name}")`
		db.run(queryAdd,function(err) {
			if(err) {
				cb(err,null)
			}else{
				cb(null,`group dengan nama ${name} berhasil dimasukkan`)
			}
		})
	}

	static updateGroup(tableName,value,id,cb) {
		let queryUpdate = `UPDATE ${tableName} SET name = "${value}" WHERE id = "${id}" `
		db.run(queryUpdate,function(err) {
			if(err) {
				cb(err,null)
			}else{
				cb(null,`${this.changes} data contact telah di update dengan id ${id}`)
			}
		})
	}


	static deleteGroup(tableName,id,cb) {
		let queryDelete = `DELETE FROM ${tableName} WHERE id = ${id}`
		let checkId = `SELECT * FROM ${tableName} WHERE id = ${id}`

		db.get(checkId,function(err,row) {
			if(err) {
				cb(err,null)
			}else{
				if(row !== undefined) {
					db.run(queryDelete,function(err) {
						if(err) {
							cb(err,null)
						}else{
							db.run(`DELETE FROM contact_groups WHERE group_id = ${id}`,function(err) {
								if(err) {
									cb(err,null)
								}
								cb(null,`GroupId  = ${id} telah di delete`)	
							})
						}
					})		
				}else{
					cb(null,"id tidak ditemukan")
				}	
			}
		})
	}

	static showGroup(id,cb) {
		let showQuery = `SELECT * FROM groups WHERE id = ${id}`
		db.get(showQuery,function(err,row) {
			if(err) {
				cb(err,null)
			}else{
				cb(null,`id = ${row.id}, groupName =${row.name}`)
			}
			
		})
	}



}

// Group.showGroup(2)

module.exports = Group