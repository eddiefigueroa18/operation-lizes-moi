// // // const { default: inquirer } = require("inquirer");

// // //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// // //Create a function that returns a license badge based on which license is passed in
// // //If there is no license, return an empty string
// // function renderLicenseBadge(data) {
// //     if(data.license === 'Other') {
// //         return ''
// //     } else if(data.license === 'Apache') {
// //         return `![License: Apache](https://img.shields.io/badge/Apache-License-success)`
// //     } else if(data.license === 'MIT') {
// //         return `![License: MIT](https://img.shields.io/badge/MIT-License-red)`
// //     }  
  
// //     // if(data.license === 'Other') {
// //     //     return ''
// //     // } else if(data.license === 'Apache','MIT','BSD 2-Clause','BSD 3-Clause','Boost Software','Creative Commons Zero v1.0 Universal','Eclipse Public','Mozilla','Other') {
// //     //     return `![${data.license}](https://img.shields.io/badge/${data.license}-License-success)` 
// //     // }
// //     //+++++++++++++++++++++++++++++++++++++++++++++++++++++//
// //     //        if (data.license === 'Apache') {userLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`

// //     // } else if (data.license === 'MIT') {userLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

// //     // } else if (data.license === 'BSD 2-clause') {userLicense = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`

// //     // } else if (data.license === 'BSD 3-clause') {userLicense = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`

// //     // } else if (data.license === 'Boost Software') {userLicense = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`

// //     // } else if (data.license === 'Creative Commons Zero v1.0 Universal') {userLicense = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`

// //     // } else if (data.license === 'Eclipse') {userLicense = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    
// //     // } else if (data.license === 'Mozilla') {userLicense = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`

// //     // } else if (data.license === 'Other') {userLicense = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](https://unlicense.org/)`

// //     // } else if (licenseType === 'Other') {
// //     //     userLicense = '';
// //     // } else if (licenseType === '') {
// //     //     return userLicense;
// //     // }
// // };
// // //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// // // Create a function that returns the license section of README
// // // If there is no license, return an empty string
// // function renderLicenseSection(data) {
// //     if(data.license === 'Other') {
// //         return 'This project is unlicensed'
// //     } else if(data.license === 'MIT') {
// //         return `![${data.license}](https://img.shields.io/badge/License-ass-yellowg)`
// //     }
    
// //     // else if(data.license === 'Apache','MIT','BSD 2-Clause','BSD 3-Clause','Boost Software','Creative Commons Zero v1.0 Universal','Eclipse Public','Mozilla','Other') { 
// //     //     return `![${data.license}](https://img.shields.io/badge/License-MIT-yellowg)`;
// //     // }
// // };
// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// function renderLicenseBadge(license) {

// if(license === 'none') {
//     return ''
// } else { 
//     return `![${license}](https://img.shields.io/badge/license-${license}-yellowg)`
// };
// };

// //create a function that returns the license section of README 
// //if there is no license, return an empty string
// function renderLicenseSection(license) {
//     if(license === 'none') {
//         return 'this project is unlicensed'
//     } else if(license === 'Apache', 'MIT', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost Software', 'Creative Commons Zero v1.0 Universal', 'Eclipse', 'Mozilla', 'Other') { 
//         return `![${license}](https://img.shields.io/badge/license-${license}-yellowg)`;
//     }
// };


// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//Create a function that generates the markdown for a README
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
};

// module.exports = generateMarkdown;


//create a function that reutrns a license badge based on which license is passed in 
//if thre is not license , return an empty string
function renderLicenseBadge(license) {
if(license === 'Other') {
    return ''
} else { 
    return `![${license}](https://img.shields.io/badge/License-${license}-yellowg)`
};
};

//create a function that returns the license section of README 
//if there is no license, return an empty string
function renderLicenseSection(license) {
    if(license === 'Other') {
        return 'This project is not licensed'
    } else if(license === 'Apache', 'MIT', 'Eclipse', 'Mozilla', 'Other') { 
        return `![${license}](https://img.shields.io/badge/License-${license}-yellowg)`;
    }
};

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

module.exports = generateMarkdown;
