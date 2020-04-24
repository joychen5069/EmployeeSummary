// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer")

class Employee {
    constructor(name, id, email) {
        this.name = name,
            this.id = id,
            this.email = email
    }

    getName = () => {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is their name?"
            }
        ])
    }

    getID = () => {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is their ID number?"
            }
        ])
    }
}



module.exports = Employee;