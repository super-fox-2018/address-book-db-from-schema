const Group = require('../models/Group');
const View = require('../views');

class groupController {
  static handleAddGroup(groupData) {
    Group.add(groupData)
      .then(newGroup => {
        View.showMessage('Successfully added new group!');
        View.showGroup(newGroup);
      })
      .catch(err => View.showError('username not available!', err));
  }

  static handleUpdateGroup(updatePrefix, updateData) {
    const prefix = Object.keys(updatePrefix)[0];
    if (prefix === 'id') {
      Group.update(updatePrefix, updateData)
        .then(updatedGroup => {
          View.showMessage('Successfully updated group!');
          View.showGroup(updatedGroup);
        })
        .catch(err => View.showError('Group not found!'));
    } else {
      View.showError('Wrong Input!');
    }
  }

  static handleDeleteGroup(deletePrefix) {
    const prefix = Object.keys(deletePrefix)[0];
    if (prefix === 'id' || prefix === 'username') {
      Group.delete(deletePrefix)
        .then(deletedContact => {
          View.showMessage('Successfully deleted group!');
          View.showGroup(deletedContact);
        })
        .catch(err => View.showError('Group not found!'));
    } else {
      View.showError('Wrong Input!');
    }
  }

  static handleGetGroup(getPrefix) {
    const prefix = Object.keys(getPrefix)[0];
    if (prefix === 'id') {
      Group.get(getPrefix)
        .then(groupDetails => {
          const members = groupDetails.map((group) => group.memberName);
          View.showGroup(groupDetails[0], members);
        })
        .catch(err => View.showError(err));
    }
  }
}

module.exports = groupController;