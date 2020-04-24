// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer")
const Employee = require("./Employee")

class Engineer extends Employee{
    constructor(gitHub) {
        super(name, id, email)
        this.gitHub = gitHub
    }
    
    getUser = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "What is the Engineer's GitHub Username?"
        },
    ])
    
}}

//make sure your answers get logged
let newEngineer = new Engineer();
newEngineer.getEmployeeInfo();
module.exports = newEngineer
