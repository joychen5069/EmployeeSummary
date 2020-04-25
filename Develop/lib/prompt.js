const inquirer = require("inquirer")
// const Engineer = require("./Engineer.js")
// const Employee = require("./Employee")

const prompt = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What role would you like to create for your employee?",
            choices: [
                "Manager",
                "Engineer",
                "Intern"

            ]
        }
    ])
}

async function init() {
    const role = await prompt();
    select(role)
}

async function select(answer) {
    switch (answer.role) {
        //create cases to switch between user selected role
        case ("Manager"):
            console.log("manager");
            //insert function that relates to other files
            break;
        //create engineer case
        case ("Engineer"):
            console.log("engineer");
            // insert function that relates to other files
            break;
        case ("Intern"):
            console.log("intern");
            // insert function that relates to other files
            break;
        default:
            //idk what you did but it broke the code
            console.log("Congrats, you broke the code")
            break;
    }
}

init();