const Controller = require('./controllers.js')
let argv = process.argv
let index = argv[2]
let first_name = argv[3]
let last_name = argv[4]
let email = argv[5]
let phone = argv[6]
let id = argv[3]
let idContact = argv[8]
let group_name = argv[7]
let newGroupName = argv[3]
let name = argv[3]

if(index === "createContact"){
    Controller.createContact(first_name, last_name, email, phone, group_name)
}
else if(index === "deleteContact"){
    Controller.deleteContact(id)
}
else if(index === "updateContact"){
    Controller.updateContact(first_name, last_name, email, phone, group_name, idContact)
}
else if(index === "showContact"){
    Controller.showContact()
}
else if(index === "showGroup"){
    Controller.showGroup()
}
else if(index === "createNewGroup"){
    Controller.createNewGroup(newGroupName)
}
else if(index === "deleteGroup"){
    Controller.deleteGroup(name)
}
