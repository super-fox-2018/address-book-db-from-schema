const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./bookAddressDB.db')

class Contact{
    static addContactProcedure(name,number,callback){
        db.run(`INSERT INTO contacts (name,number) VALUES (?,?)`,[name,number],callback)
    }

    static updateContactProcedure(id,name,number,callback){
        db.get(`SELECT * FROM contacts WHERE id = ?`, [id], (err, contactFound)=>{
            if(contactFound !== undefined){
                return db.run(`UPDATE contacts SET name = ?, number = ? WHERE id = ?`, [name,number,id],callback)
            }
            callback('no contact found')
        })
    }

    static removeContactProcedure(id,callback){
        db.run(`DELETE FROM contacts WHERE id = ?`,[id],callback)
    }

    static showContactProcedure(id,callback){
        db.all(`SELECT contacts.name, contacts.number, groups.name AS groupName FROM contacts JOIN contacts_groups ON contacts.id = contacts_groups.contact_id JOIN groups ON contacts_groups.group_id = groups.id WHERE contacts.id = ?`,[id],callback)
    }

    static assignContactProcedure(listcontact,group,callback){
        let peopleInsideAlready = []
        for(let i = 0; i < listcontact.length; i++){
            db.get(`SELECT * FROM contacts_groups WHERE contact_id = ? AND group_id = ?`, [listcontact[i],group], (err,relationFound)=>{
                if(relationFound === undefined){
                    db.run(`INSERT INTO contacts_groups (contact_id,group_id) VALUES (?,?)`,[listcontact[i],group],(err)=>{
                        if(err) throw err;
                        if(i === listcontact.length-1 && peopleInsideAlready.length > 0) return callback(`contact(s) added to the group! people inside the group already: ${peopleInsideAlready}`)
                    })
                }else{
                    peopleInsideAlready.push(listcontact[i])
                }
            })
        }
    }

    static kickContactProcedure(listcontact,group,callback){
        for(let i = 0; i < listcontact.length; i++){
            db.run(`DELETE FROM contacts_groups WHERE contact_id = ? AND group_id = ?`,[listcontact[i],group],(err)=>{
                if(err) throw err;
                if(i === listcontact.length-1) return callback('contact(s) kicked from the group!')
            })
        }
    }

}

class Group{
    static addGroupProcedure(name,callback){
        db.run(`INSERT INTO groups (name) VALUES (?)`,[name],callback)
    }

    static updateGroupProcedure(id,name,callback){
        db.get(`SELECT * FROM groups WHERE id = ?`, [id],(err,groupFound)=>{
            if(groupFound !== undefined){
                return db.run(`UPDATE groups SET name = ? WHERE id = ?`, [name,id],callback)
            }
            callback('no group found')
        })
    }

    static removeGroup(id,callback){
        db.run(`DELETE FROM groups WHERE id = ?`, [id], (err)=>{
            if(err) throw err;
            db.run(`DELETE FROM contacts_groups WHERE group_id = ?`, [id], callback)
        })
    }

    static showGroup(id,callback){
        db.all(`SELECT groups.name, contact_id FROM groups JOIN contacts_groups ON groups.id = contacts_groups.group_id WHERE groups.id = ?`,[id],callback)
    }
}
module.exports = {Group,Contact}