// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js")
const inquirer = require("inquirer")

//start asking questions here
class Manager extends Employee {
    constructor(name, id, email, office){
    super(name, id, email)
    this.office = office;
this.role = "Manager"
    }

getOffice() {
    inquirer.prompt([
        {
            type: "input",
            name: "office",
            message: "What is the Manager's office phone number?"
        },
    ])
}


getRole() {
    return this.role
}

getOffice() {
    return this.office
}
}

//export out
module.exports = Manager;