const controller = require ("../Controller/controller.js");
const group = require("./groupModel.js");
const db = require("../setup.js")

class Contact{
  constructor(contactObj){
    this._name = contactObj.name;
    this.name = "";
    this.id = this.getId();
  }

  save(cb){
    var classThis = this;
    let insertName = `INSERT INTO contacts (name)
                      VALUES ('${this._name}');`

    db.all(insertName, function(err, resultContact){
      if(err) throw err;
      else{
        classThis.getId();
      }
    })
  }

  getId(cb){
    let getId = `SELECT * FROM contacts
                   WHERE contacts.name = '${this._name}';`
    db.all(getId, function(err, result){
      if (err) throw err;
      if(result.length !== 0){
        this.id = result[0].id;
        console.log(this.id);
        cb(result[0].id);
      }
      else{
        this.id = null;
        console.log(this.id);
        // cb(this.id);
      }
    })
  }


  update(){
    this.getId(function(id){
      var idCompare =  id;
      let updateName = `UPDATE contacts
                        SET name =  '${this.name}'
                        WHERE id = ${idCompare};`
                        console.log(updateName);
    })

                      // console.log(`${this.name}`);

                                            console.log("----" + this.id);

    // db.run(updateName, function(err,name){
    //   if (err) throw err;
    // })
  }
  //
  // name(){
  //   this.update(function(name){
  //     console.log(name);
  //   })
  // }

}


let contact = new Contact({name:"gyrados2"});
contact.id;
contact.save();
contact.id;
contact.name = "Bob";
contact.update();
console.log("----", contact.name);
// contact.name;
// contact.readId();