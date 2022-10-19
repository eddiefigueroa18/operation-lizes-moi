// const { default: inquirer } = require("inquirer");

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//create a function that reutrns a license badge based on which license is passed in 
//if thre is not license , return an empty string
function renderLicenseBadge(license) {
if(license === 'Other') {
    return ''
} else { 
    return `![${license}](https://img.shields.io/badge/License-${license}-yellowg)`
};
};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//create a function that returns the license section of README 
//if there is no license, return an empty string
function renderLicenseSection(license) {
    if(license === 'Other') {
        return 'This project is not licensed'
    } else if(license === 'Apache', 'MIT', 'Eclipse', 'Mozilla', 'Other') { 
        return `![${license}](https://img.shields.io/badge/License-${license}-yellowg)`;
    }
};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//create a function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}
${renderLicenseBadge(data.license)} 
## Description
${data.description}
## Table of Contents 
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributions](#Contributing)
* [Test](#Tests)
* [License](#License)
* [Questions](#Questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributionGuidelines}
## Tests
${data.tests}
## License 
${renderLicenseSection(data.license)} This project is ${data.license} licensed.
## Questions
* Github: https://github.com/${data.github}
* Email: ${data.email}`;
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

module.exports = generateMarkdown;

