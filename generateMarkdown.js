//Create a function that returns a license badge based on which license is passed in
//If there is no license, return and empty string
function $renderLicenseBadge(license) {
    if (license === 'none') {
        return ''
    } else {
        return `![${license}](https://img.shields.io/badge/license-${license}-yellowg)`
    };
};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license === 'none') {
        return 'This project is unlicensed'
    } else if (license === 'Apache License ',
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
    'The Unlicense') {
        return `![${license}](https://img.shields.io/badge/license-${license}-yellowg)`;
    }
};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//Create a function that generates the markdown for a README
function generateMarkdown(data) {
    return `
    # ${data.title}
    ${$renderLicenseBadge(data.license)}

    ## Description
    ${data.description}

    ## Table of Contents 
    ${data.tableOfContents}
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributions](#contributions)
    * [Test](#tests)
    * [License](#license)
    * [Contact](#contact)

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Contributions
    ${data.contributionGuidelines}

    ## Tests
    ${data.tests}

    ## License 
    ${data.license} 
    ${renderLicenseSection(data.license)} This project is ${data.license}.

    ## Github
    ${data.github}
    
    ## Email
    ${data.email}`;
};

module.exports = generateMarkdown;