// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer")

//create class Employee to be parent to all other employees
class Employee {
    constructor(name, Id, email) {
        this.name = name;
        this.Id = Id;
        this.email = email;
    }

    
    getEmployeeInfo(){
        inquirer.prompt([
            { //ask for their name
                type: "input",
                name: "name",
                message: "What is their name?"
            },

            //ask for their ID number
            {
                type: "input",
                name: "Id",
                message: "What is their ID number?"
            },

            //ask for their email
            {
                type: "input",
                name: "email",
                message: "What is their email?"
            }
        ])
    };

    printInfo() {
        console.log(`${this.name}, ${this.Id}, ${this.email}`)
    }
    getName() {
        return this.name
    }
    getId() {
        return this.Id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return "Employee"
    }
}

let newEmployee = new Employee();
newEmployee.getEmployeeInfo()

module.exports = Employee;