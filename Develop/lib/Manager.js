// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js")
const inquirer = require("inquirer")

//start asking questions here
class Manager extends Employee {
    constructor(name, id, email, office){
    super(name, id, email)
    this.officeNumber = office;
this.role = "Manager"
    }

getRole() {
    return this.role
}

getOfficeNumber() {
    return this.officeNumber
}
}

//export out
module.exports = Manager;