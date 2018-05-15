const db = require('./setup');
const fs = require('fs');

const stringContact = fs.readFileSync('./contacts.json','utf8');
const arrContact = JSON.parse(stringContact);

for (let i = 0; i < arrContact.length; i++){
    if (arrContact[i]){
        let query = `INSERT INTO contacts (name, company, phone, email, address)`
        query += `VALUES ("${arrContact[i].name}", "${arrContact[i].company}",`
        query += `"${arrContact[i].phone}","${arrContact[i].email}", "${arrContact[i].address}");`
        db.run(query, function (err){
            if (err) throw err;
            console.log('Successfully create a new row', arrContact[i]);
        })
    }
}


const stringGroup = fs.readFileSync('./group.json','utf8');
const arrGroup = JSON.parse(stringGroup);

for (let i = 0; i < arrGroup.length; i++){
    if (arrGroup[i]){
        let query = `INSERT INTO [group] (group_name, description) `
        query += `VALUES ("${arrGroup[i].groupName}", "${arrGroup[i].description}");`;
        db.run(query, function (err){
            if (err) throw err;
            console.log('Successfully create a new row', arrGroup[i]);
        })
    }
}