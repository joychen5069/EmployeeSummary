// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer")

//create class Employee to be parent to all other employees
class Employee {
    constructor(name, id, email) {
        this.name = name,
        this.id = id,
        this.email = email
    }

    //ask for their name
    getName = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is their name?"
            }
        ])
    }

    //ask for their ID number
    getID = () => {
       inquirer.prompt([
            {
                type: "input",
                name: "ID",
                message: "What is their ID number?"
            }
        ])
        
    }

    //ask for their email
    getEmail = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "email",
                message: "What is their email?"
            }
        ])
    }

    printInfo() {
        console.log(`${this.name}, ${this.ID}, ${this.email}`)
    }
}

let newEmployee = new Employee();
newEmployee.getName()

    .then(async function (answers) {
        console.log(answers)
    })
    // .then(getID())

    // .then(getEmail())

    // .catch(function (err) {
    //     console.log(err);
    // });;
// newEmployee.getID();
// newEmployee.getEmail();
// newEmployee.printInfo();

module.exports = Employee;