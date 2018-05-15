const controller = require ("../Controller/controller.js");
const group = require("./groupModel.js");
const db = require ("../setup.js")

class Contact{
  constructor(contactObj){
    this._name = contactObj.name;
    this.company = contactObj.company;
    this.phone = contactObj.phone;
    this.email = contactObj.email;
    this.name = "";
    this.id = this.ID();
  }

  save(){
    var classThis = this;
    let insertName = `INSERT INTO contacts (name,company,phone,email)
                      VALUES ('${this._name}', '${this.company}','${this.phone}','${this.email}');`

    db.run(insertName, function(err){
      if(err) throw err;
      else{
        classThis.ID();
      }
    })
  }

   getId(cb){
    let getId = `SELECT * FROM contacts
                   WHERE contacts.name = '${this._name}';`
    db.all(getId, function(err, result){
      if (err) throw err;
        cb(result);
    })
  }

  ID(){
    this.getId(function(result){
      if(result.length !== 0){
        console.log(result[0].id);
        return result[0].id;
      }
      else{
        console.log(null);
        return null;
      }
    })
  }


  update(){
    let classThis = this;
    this.getId(function(idResult){
      let updateName = `UPDATE contacts
                        SET name =  '${classThis.name}'
                        WHERE id = ${idResult[0].id};`

      db.run(updateName, function(err,name){
        if (err) throw err;
      })
    })
  }

}

let obj = {
  name:"gyrados",
  company:"pokemon",
  phone:"12344556",
  email:"gyrados@gmail.com"
}
let contact = new Contact(obj);
// contact.id;
// contact.save();
// contact.id;
// contact.name = "Bob";
// contact.update();