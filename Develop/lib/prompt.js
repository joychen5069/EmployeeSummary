const inquirer = require("inquirer")
const Engineer = require("./Engineer.js")
const Employee = require("./Employee.js")
const Manager = require("./Manager.js")
const Intern = require("./Intern.js")
const htmlRenderer = require("./htmlRenderer.js")

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

//Manager
async function createManager() {
    inquirer.prompt([
        //ask for their name
        { 
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
        },
        //ask for their office number
        { 
            type: "input",
            name: "officeNumber",
            message: "What is their office number?"
        }
    ])
    .then(await function(answers) {
        const manager = new Manager(answers.name, answers.Id, answers.email, answers.officeNumber)
        console.log(manager)
    })
}

//Engineer
async function createEngineer() {
    inquirer.prompt([
        //ask for their name
        { 
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
        },
        //ask for their office number
        { 
            type: "input",
            name: "gitHub",
            message: "What is their gitHub username?"
        }
    ])
    .then(await function(answers) {
        const engineer = new Engineer(answers.name, answers.Id, answers.email, answers.gitHub)
        console.log(engineer)
    })
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
            createManager();
            break;

        //create engineer case
        case ("Engineer"):
            console.log("engineer");
            createEngineer()
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