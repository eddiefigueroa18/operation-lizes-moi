//Create a function that generates the markdown for a README
function generateMarkdown(data) {
    return `

    #{data.title}
    //$renderLicenseBadge(data.license)}

    ## Description
    ${data.description}

    ## Table of Contents 
    ${data.tableOfContents}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Contributions
    ${data.contributionGuidelines}

    ## Tests
    ${data.tests}

    ## License  
    //enter license function here

    ## Contact
    ${data.contact}`    
}

module.exports = generateMarkdown;