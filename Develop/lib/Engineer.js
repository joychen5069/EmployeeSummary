// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer")

//start asking questions here
async function EngineerQuest() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Engineer's name?"
        },
        {
            type: "input",
            name: "ID",
            message: "What is the Engineer's ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the Engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the Engineer's GitHub Username?"
        },
    ])
}

//export out
module.exports = EngineerQuest;