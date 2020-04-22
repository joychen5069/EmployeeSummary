// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer")

//start asking questions here
async function InternQuest() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Intern's name?"
        },
        {
            type: "input",
            name: "ID",
            message: "What is the Intern's ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the Intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "Where does the Intern go to school?"
        },
    ])
}

//log answers
InternQuest()
    .then(async function(answers) {
        console.log(answers)
    })
    .catch(function (err) {
        console.log(err);
    })

module.exports = InternQuest;