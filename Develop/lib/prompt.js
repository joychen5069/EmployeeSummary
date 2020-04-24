const inquirer = require("inquirer")
const Engineer = require("./Engineer")
const Employee = require("./Employee")

const prompt = () => {
    return inquirer.prompt ([
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

prompt()
    .then(function(answers) {
        console.log(answers)

        if (answers.role === "Engineer") {
            const engineer = new Engineer()
            engineer.getGitHub();
        }
    });