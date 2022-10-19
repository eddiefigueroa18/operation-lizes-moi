//Variables 
const inquirer = require ('inquirer');
const fs = require ('fs');
const generate = require('./generateMarkdown');

// const { default: CheckboxPrompt } = require("inquirer/lib/prompts/checkbox");

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//Array of questions for user input 
inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project? ",
            name: "title",
            validate: async (input) => {
                if (input) {
                    return true
                } else {
                    console.log("Please enter a title ");
                    return false
                } 
            }
        },
        {
            type: "input",
            message: "Add a Description to your project ",
            name: "description",
            validate: async (input) => {
                if (input) {
                    return true 
                } else {
                    console.log("Please enter a project Description ");
                    return false
                }
            }
        },
        // {
        //     type: "input",
        //     message: "Add table of contents ",
        //     name: "tableOfContents",
        // },
        {
            type: "input",
            message: "Add Installation instructions/requirements ",
            name: "installation",
        },
        {
            type: "input",
            message: "Add usage information ",
            name: "usage",
        },
        {
            type: "input",
            message: "Add contributors to the project ",
            name: "contributionGuidelines",
        },
        {
            type: "input",
            message: "Describe how you test this application ",
            name: "tests",
        },
        {
            type: "list",
            message: "Add a License ",
            name: "license",
            choices: [
                'Apache',
                'MIT',
                'Eclipse',
                'Mozilla',
                'Other'
            ],
        },
        {
            type: "input",
            message: "Enter your Github username ",
            name: "github",
            validate: async (input) => {
                if (input) {
                    return true 
                } else {
                    console.log("Please enter github username ");
                    return false
                }
            }
        }, 
        {
            type: "input",
            message: "Enter your email ",
            name: "email",
            validate: async (input) => {
                if (input) {
                    return true 
                } else {
                    console.log("Please enter a good email ");
                    return false
                }
            }
        },
    ])

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//function to write the README file

.then((answers) => {
    console.log(answers)
    fs.writeFile('./generated/README.md', generate(answers), (err)=> {
        err ? console.error(err) : console.log('New README file generated')
    })
  });

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//Create an init function to initialize the application

init = () => {
    inquirer.prompt()
    .then(data =>{
        writeToFile(data)
    });
};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//Function call to initialize the app

// init ();