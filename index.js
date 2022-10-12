const inquirer = require ("inquirer");

const leQuestion = [
    {
        type: "input",
        message: "What is the title of your project? ",
        name: "title",
    },
    {
        type: "input",
        message: "Add a Description to your project ",
        name: "description",
    },
    //add an option to add table of contents
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
        name: "contribution-guidelines",
    },
    {
        type: "input",
        message: "Add test Instructions ",
        name: "tests",
    },
    {
        type: "input",
        message: "Add a License ",
        name: "license",
        choices: [
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense',
        ]
    },
   
    {
        type: "input",
        message: "Add contact information ",
        name: "contact",
    }
];