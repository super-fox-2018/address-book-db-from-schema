const Contact = require('../models/Contact');
const View = require('../views');

class contactController {
  static handleAddContact(contactData) {
    Contact.add(contactData)
      .then(newContact => {
        View.showMessage('Successfully added contact!');
        View.showContact(newContact);
      })
      .catch(err => View.showError('Wrong input!'));
  }

  static handleUpdateContact(updatePrefix, updateData) {
    const prefix = Object.keys(updatePrefix)[0];
    if (prefix === 'id' || prefix === 'username') {
      Contact.update(updatePrefix, updateData)
        .then(updatedContact => {
          View.showMessage('Successfully updated contact!');
          View.showContact(updatedContact);
        })
        .catch(err => View.showError('Contact not found!'));
    } else {
      View.showError('Wrong Input!');
    }
  }

  static handleDeleteContact(deletePrefix) {
    const prefix = Object.keys(deletePrefix)[0];
    if (prefix === 'id') {
      Contact.delete(deletePrefix)
        .then(deletedGroup => {
          View.showMessage('Successfully deleted group!');
          View.showContact(deletedGroup);
        })
        .catch(err => View.showError('Contact not found!'));
    } else {
      View.showError('Wrong Input!');
    }
  }

  static handleGetContact(getPrefix) {
    const prefix = Object.keys(getPrefix)[0];
    if (prefix === 'id' || prefix === 'username') {
      Contact.get(getPrefix)
        .then(contactDetails => {
          const groups = contactDetails.map((contact) => contact.groupName);
          View.showContact(contactDetails[0], groups);
        })
        .catch(err => View.showError(err));
    }
  }

  static handleAssign(assignData) {
    Contact.assign(assignData.id, assignData.groupId)
      .then(contacts => View.showAssign(contacts, assignData.groupId))
      .catch(err => View.showError('Group or Contact not found!', err)); 
  }

}

module.exports = contactController;