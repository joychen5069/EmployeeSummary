// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer")
const Employee = require("./Employee.js")

class Engineer extends Employee{
    constructor(name, id, email, gitHub) {
        super(name, id, email)
        this.github = gitHub
        this.role = "Engineer";
    }
    
    getUser() {
    inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "What is the Engineer's GitHub Username?"
        },
    ])
}

    getRole() {
        return this.role
    }

    getGithub() {
        return this.github
    }
    
}

//make sure your answers get logged
// let newEngineer = new Employee();
// newEngineer.getEmployeeInfo();
module.exports = Engineer
