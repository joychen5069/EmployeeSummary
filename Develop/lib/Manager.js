// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const inquirer = require("inquirer")

//start asking questions here
async function ManagerQuest() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Manager's name?"
        },
        {
            type: "input",
            name: "ID",
            message: "What is the Manager's ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the Manager's email?"
        },
        {
            type: "input",
            name: "phone",
            message: "What is the Manager's office phone number?"
        },
    ])
}

//export out
module.exports = ManagerQuest;