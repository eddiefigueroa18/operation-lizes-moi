//create a function that returns a license BADGE based on which license is passed in 
//if there is not license , return an empty string
function renderLicenseBadge(license) {
if(license === 'Other') {
    return ''
} else { 
    return `![${license}](https://img.shields.io/badge/License-${license}-yellowg)`
};
};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//create a function that returns a license LINK based on which license is passed in 
//if there is not license, return an empty string
function renderLicenseLink(license) {
if(license === 'Other') {
    return ''
} else if (license === 'Apache') {
    return ` https://apache.org/licenses/` 
}  else if (license === 'MIT') {
    return ` https://mit-license.org/`
} else if (license === 'Eclipse') {
    return ` https://www.eclipse.org/legal/epl-2.0/`
} else if (license === 'Mozilla') {
    return ` https://www.mozilla.org/en-US/MPL/`
};
};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//create a function that returns the license SECTION of README 
//if there is no license, return an empty string
function renderLicenseSection(license) {
    if(license === 'Other') {
        return 'This project is not licensed'
    } else if(license === 'Apache', 'MIT', 'Eclipse', 'Mozilla', 'Other') { 
        return `![${license}](https://img.shields.io/badge/License-${license}-yellowg)`;
    }
};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//create a function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}
${renderLicenseBadge(data.license)} This project is: ${data.license} licensed.
For more information regarding License, Refer to: ${renderLicenseLink(data.license)}
## Description
${data.description}
## Table of Contents 
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
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
${renderLicenseSection(data.license)} This project is: ${data.license} licensed.
## Questions
For more information you can reach me through:
* Github: https://github.com/${data.github}
* Email: ${data.email}
    - For email, please give me your name and a brief description of your reason for contacting me `;
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

module.exports = generateMarkdown;

