class View{
    static createContact(){
        console.log('New contact has been added!')
    }

    static deleteContact(id){
        console.log(`ID ${id} has been deleted!`)
    }

    static updateContact(idContact){
        console.log(`Contact ${idContact} has been updated!`)
    }

    static showContact(dataContact){
        console.log(dataContact)
    }

    static showGroup(dataGroup){
        console.log(dataGroup)
    }

    static createNewGroup(newGroupName){
        console.log(`Successfully create new group ${newGroupName}`)
    }

    static deleteGroup(name){
        console.log(`Successfully delete group ${name}`)
    }
}

module.exports = View