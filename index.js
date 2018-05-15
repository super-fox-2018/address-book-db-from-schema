const Controller = require('./controller/controller.js');


// driver code
let contact = new Contact({name: "Alex"});
contact.id // null
contact.save() // executes INSERT statement and makes a new record
contact.id // let's say 20

contact.name = "Bob"
contact.update(); // executes UPDATE statement