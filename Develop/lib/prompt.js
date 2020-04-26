const inquirer = require("inquirer");
const Engineer = require("./Engineer");
const Manager = require("./Manager");
const Intern = require("./Intern");
const path = require("path");
const fs = require("fs");


//create const that log to html
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./htmlRenderer")

const write = () => {
    console.log(team)
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(team), "utf-8");
    
}

const team = []

const additional = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What role would you like to create for your employee?",
            choices: [
                "Engineer",
                "Intern",
                "Done"

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
            message: "What is the Manger's name?"
        },

        //ask for their ID number
        {
            type: "input",
            name: "Id",
            message: "What is the Manager's ID number?"
        },

        //ask for their email
        {
            type: "input",
            name: "email",
            message: "What is the Manager's email?"
        },
        //ask for their office number
        {
            type: "input",
            name: "officeNumber",
            message: "What is the Manager's office number?"
        }
    ])
        .then(await function (answers) {
            //create manager and add to team
            const manager = new Manager(answers.name, answers.Id, answers.email, answers.officeNumber)
            team.push(manager)
            // console.log(manager)
            
            //ask for another employee
            init();

        })
}

//Engineer
async function createEngineer() {
    inquirer.prompt([
        //ask for their name
        {
            type: "input",
            name: "name",
            message: "What is the Engineer's name?"
        },

        //ask for their ID number
        {
            type: "input",
            name: "Id",
            message: "What is the Engineer's ID number?"
        },

        //ask for their email
        {
            type: "input",
            name: "email",
            message: "What is the Engineer's email?"
        },
        //ask for their office number
        {
            type: "input",
            name: "gitHub",
            message: "What is the Engineer's gitHub username?"
        },

    ])
        .then(await function (answers) {
            //push engineer to the team
            const engineer = new Engineer(answers.name, answers.Id, answers.email, answers.gitHub)
            team.push(engineer)

            init();

        })
}

//Intern
async function createIntern() {
    inquirer.prompt([
        //ask for their name
        {
            type: "input",
            name: "name",
            message: "What is the Intern's name?"
        },

        //ask for their ID number
        {
            type: "input",
            name: "Id",
            message: "What is the Intern's ID number?"
        },

        //ask for their email
        {
            type: "input",
            name: "email",
            message: "What is the Intern's email?"
        },

        //ask for their school
        {
            type: "input",
            name: "school",
            message: "Where does the Intern go to school?"
        }
        
    ])
        .then(await function (answers) {
            //push intern to team
            const intern = new Intern(answers.name, answers.Id, answers.email, answers.school)
            team.push(intern)

                init();
            
        })
}

async function init() {
    const role = await additional();
    select(role)
}

async function select(answer) {
    switch (answer.role) {

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
            console.log("Your team.html has been written")
            write();
            break;
    }
}



createManager();