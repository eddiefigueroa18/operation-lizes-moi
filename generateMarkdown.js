//Create a function that returns a license badge based on which license is passed in
//If there is no license, return and empty string
// function $renderLicenseBadge(license) {}




//Create a function that generates the markdown for a README
function generateMarkdown(data) {
    return `

    # ${data.title}

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
    //enter license function here

    ## Contact
    ${data.contact}`;    
}

module.exports = generateMarkdown;