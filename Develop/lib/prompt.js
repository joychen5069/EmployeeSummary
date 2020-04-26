const inquirer = require("inquirer");
const Engineer = require("./Engineer.js");
const Employee = require("./Employee.js");
const Manager = require("./Manager.js");
const Intern = require("./Intern.js");
const path = require("path");
const fs = require("fs");


//create const that log to html
const htmlRenderer = require("./htmlRenderer.js")
const team = []

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
        },

        //ask if they have another employee to add
        {
            type: "confirm",
            name: "add",
            message: "Would you like to add another employee?"
        }
    ])
        .then(await function (answers) {
            //create manager and add to team
            const manager = new Manager(answers.name, answers.Id, answers.email, answers.officeNumber)
            team.push(manager)

            //loop if they want to add another employee
            if (answers.add === true) {
                init();
            }
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
        },
        //ask if they have another employee to add
        {
            type: "confirm",
            name: "add",
            message: "Would you like to add another employee?"
        }
    ])
        .then(await function (answers) {
            //push engineer to the team
            const engineer = new Engineer(answers.name, answers.Id, answers.email, answers.gitHub)
            team.push(engineer)
            
            //loop if they want another employee
            if (answers.add === true) {
                init();
            }

        })
}

//Intern
async function createIntern() {
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

        //ask for their school
        {
            type: "input",
            name: "school",
            message: "Where does the Intern go to school?"
        },

        //ask if they have another employee to add
        {
            type: "confirm",
            name: "add",
            message: "Would you like to add another employee?"
        }
    ])
        .then(await function (answers) {
            //push intern to team
            const intern = new Intern(answers.name, answers.Id, answers.email, answers.school)
           team.push(intern)

            //loop if they answer yes
            if (answers.add === true) {
                init();
            }

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

        //create Intern case
        case ("Intern"):
            console.log("intern");
            createIntern();
            break;

        default:
            //idk what you did but it broke the code
            console.log("Congrats, you broke the code")
            break;
    }
}



init();