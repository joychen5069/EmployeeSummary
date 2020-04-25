// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer")

//create class Employee to be parent to all other employees
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    printInfo() {
        console.log(`${this.name}, ${this.Id}, ${this.email}`)
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return "Employee"
    }
}

// let newEmployee = new Employee();
// newEmployee.getEmployeeInfo()

module.exports = Employee;