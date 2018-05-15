var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./address_book.db');


class Contact {

	static addContact(name,company,phone,email,cb) {
		if(phone.length<=12 && email.indexOf("@")!==-1 && email.indexOf(".")) {
			let insertQuery = `INSERT INTO contacts VALUES(null,"${name}","${company}","${phone}","${email}")`
			db.run(insertQuery,function(err) {
				if(err) {
					cb(err,null)
				}else{
					cb(null,`data name:"${name}",company:"${company}",phone:"${phone}",email:"${email}" berhasil dimasukkan`)
				}
			})
		}else{
			cb(null,'email atau nomor tidak valid')
		}
		
	}


	static updateContact(tableName,columnName,value,id,cb) {
		let queryUpdate= `UPDATE ${tableName} SET ${columnName} = "${value}" WHERE id = ${id}`
		db.run(queryUpdate,function(err) {
			if(err) {
				cb(err,null)
			}else{
				cb(null,`${this.changes} data contact telah di update dengan id ${id}`)
			}
		})
	}

	static deleteContact(tableName,id,cb) {
		let checkId = `SELECT * FROM ${tableName} WHERE id = ${id}`
		let deleteQuery = `DELETE FROM ${tableName} WHERE id = "${id}"`
		db.get(checkId,function(err,row) {
			if(err) {
				cb(err,null)
			}else{
				if(row !== undefined) {
					db.run(deleteQuery,function(err) {
						if(err) {
				 			cb(err,null)
						}else {
							db.run(`DELETE FROM contact_groups WHERE contact_id = ${id}`,function(err){
								if(err) {
									cb(err,null)
								}else{
									cb(null,`id  = ${id} telah di delete`)
								}	
							})
				 			
						}
					})
				}else {
					cb(null,`tidak ada id tersebut`)
				}
			}
		})
	}

	static showContact(id,cb) {
		let showQuery = 
		`SELECT contacts.name AS contactName,company,phone,email,groups.name AS groupName FROM contact_groups 
			JOIN contacts
			ON contact_groups.contact_id = contacts.id
			JOIN groups
			ON contact_groups.group_id = groups.id
		WHERE contacts.id = ${id}`
		var groupName = ""
		db.all(showQuery,function(err,rows) {
			if(err) {
				cb(err,null)
			}else{
				for(let i=0;i<rows.length;i++) {
				var contactName = rows[i].contactName;
				var company = rows[i].company
				var phone = rows[i].phone
				var email = rows[i].email
				groupName+=rows[i].groupName+" "
			}
			
				cb(null,`contactName = ${contactName},company = ${company},phone = ${phone},email = ${email},groupName = ${groupName}`)	
			}
			
		})	

		//console.log(groupName)
	}

	static showAllContacts(cb) {
		db.all(`SELECT * FROM contacts`,function(err,rows) {
			cb(rows)
		})
	}

	static assignContact(idContact,idGroup,cb) {
		db.get(`SELECT * FROM contacts WHERE id = ${idContact}`,function(err,row) {
			if(err) {
				cb(err,null)
			}
			if(row !== undefined) {
				db.get(`SELECT * FROM contact_groups WHERE contact_id = ${idContact}`,function(err,row) {
					if(err) {
						cb(err,null)
					}
					if(row!==undefined) {
						db.run(`INSERT INTO contact_groups VALUES(null,"${idContact}","${idGroup}")`)
						cb(null,`data berhasil diupdate`)	
					}
							
				})
			}	
		})
		
	}


}



module.exports = Contact