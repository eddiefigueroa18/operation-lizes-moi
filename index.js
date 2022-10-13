const inquirer = require ("inquirer");
const fs = require ('fs');
// const { default: CheckboxPrompt } = require("inquirer/lib/prompts/checkbox");

inquirer
    const leQuestion = [
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
        {
            type: "input",
            message: "Add table of contents ",
            name: "tableOfContents",
        },
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
            message: "Add test Instructions ",
            name: "tests",
        },
        {
            type: "list",
            message: "Add a License ",
            name: "license",
            choices: [
                'Apache License ',
                'GNU General Public License ',
                'MIT License',
                'BSD 2-Clause "Simplified" License',
                'BSD 3-Clause "New" or "Revised" License',
                'Boost Software License ',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License',
                'GNU Affero General Public License',
                'GNU General Public License',
                'GNU Lesser General Public License',
                'Mozilla Public License',
                'The Unlicense',
            ],
            validate: async (list) => {
                if (Checkbox.length === 1) {
                    return true
                } else {
                    console.log("Please select at least one license ");
                    return false
                }
            }
            },
    
        {
            type: "input",
            message: "Add contact information ",
            name: "contact",
        }
    ];