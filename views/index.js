const capitalize = require('./../helpers/capitalize');

class View {
  static showContact(contact, groups) {
    const contactProps = Object.keys(contact);
    for (let i = 0; i < contactProps.length; i += 1) {
      const prop = contactProps[i];
      if (prop !== 'groupName') {
        console.log(`${capitalize(prop)} : ${contact[prop]}`);
      }
    }

    if (groups) {
      console.log(`Joined groups : ${groups.join(', ') || 'None'}`);
    }
  }

  static showGroup(group, members) {
    const groupProps = Object.keys(group);
    for (let i = 0; i < groupProps.length; i += 1) {
      const prop = groupProps[i];
      if (prop !== 'memberName') {
        console.log(`${capitalize(prop)} : ${group[prop]}`);
      }
    }

    if (members) {
      console.log(`Members : ${members.join(', ') || 'None'}`);
    }
  }

  static showAssign(contacts, groupId) {
    const members = [];
    for (let i = 0; i < contacts.length; i += 1) {
      members.push(contacts[i].username);
    }
    console.log(`Assign ${members.join(', ')} to group with id ${groupId}`);
  }

  static showMessage(message) {
    console.log(message);
  }

  static showError(errorMessage, err) {
    console.log(errorMessage);
    if (err) console.log(err);
  }
}

module.exports = View;