class View {
  static showHelp() {
    console.log(`Available commands:
    $ node index help
    $ node index add <contact-name> <phone> <email> <company>
    $ node index show <all | contact-id>
    $ node index update
    $ node index delete <contact-id>
    $ node index create-group <group-name>
    $ node index assign <contact-id> <group-id>`)
  }

  static displayAllContacts(contacts) {
    console.log(contacts);
  }

  static displayRegister(contact) {
    console.log("Contact is saved");
    console.log(`Name: ${contact.name}, Phone: ${contact.number}, 
    Email: ${contact.email}, Company: ${contact.company}`)
  }

  static displayContact(contact) {
    console.log(`Updated contact: ${contact.name}`)
  }
  
  static displayDeleted(msg) {
    console.log(msg);
  }

}

module.exports = View;