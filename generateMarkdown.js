// const { default: inquirer } = require("inquirer");

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//Create a function that returns a license badge based on which license is passed in
//If there is no license, return an empty string
function renderLicenseBadge(data) {
    let licenseType = data.license;
    let userLicense = '';

           if (licenseType === 'Apache License') {userLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`

    } else if (licenseType === 'MIT License') {userLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

    } else if (licenseType === 'BSD 2-Clause License') {userLicense = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`

    } else if (licenseType === 'BSD 3-Clause License') {userLicense = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`

    } else if (licenseType === 'Boost Software License') {userLicense = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`

    } else if (licenseType === 'Creative Commons Zero v1.0 Universal') {userLicense = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`

    } else if (licenseType === 'Eclipse Public License') {userLicense = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    
    } else if (licenseType === 'Mozilla Public License') {userLicense = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`

    } else if (licenseType === 'The Unlicense') {userLicense = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](https://unlicense.org/)`

    } else if (licenseType === 'Other') {
        userLicense = '';
    } else if (licenseType === '') {
        return userLicense;
    }
};
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
    renderLicenseBadge(data)
};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//Create a function that generates the markdown for a README
function generateMarkdown(data) {
    return `
    # ${data.title}
    ${renderLicenseSection(data.license)}

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
    ${data.license} 
    ${renderLicenseSection(data.license)} This project is ${data.license}

    ## Questions
    * Github: https://github.com/${data.github}
    * Email: ${data.email}`;
};

module.exports = generateMarkdown;