

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'Apache 2.0'){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)<br>  License Link:<br> https://opensource.org/licenses/Apache-2.0"}

    else if(license === 'GNU GPL V3') {
     return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) <br>  License Link: <br> https://www.gnu.org/licenses/gpl-3.0"}

    else if (license === 'IBM'){
      return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0) <br> License Link: <br>  https://opensource.org/licenses/IPL-1.0"}
    
    else if (license === 'MIT') {
     return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)<br> License Link:<br>  https://opensource.org/licenses/MIT"}

    else if (license === 'Mozilla'){
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)<br>  License Link:<br>  https://opensource.org/licenses/MPL-2.0"}
 
    else if (license === 'No License'){
        ""}
         
    else{
      `No license was selected.`
    }
  }

//TODO: Create a function to generate markdown for README

function generateMarkdown({name, title, description, license, contribution, installation, usage, testIns, github, email}) {
  
return `
# ${title}

## Table of Contents
>[Author Name](#author-name) 

>[Project Description](#description)

>[Installation](#installation)

>[Usage](#usage)

>[Test Instructions](#test-instructions)

>[Contribution Guidelines](#contribution)

>[GitHub username](#gitHub-username)

>[Contact Me!](#contact-me-with-questions!)

>[License](#nodelicense)

## Author Name
${name}

## > Project Description
${description}

## Installation
${installation}

## Usage
${usage}

## Test Instructions
${testIns}

## Contribution
${contribution}

## GitHub userName
${github}

## Contact me with questions!
${email}

## License
${renderLicenseBadge(license)}

`;
}

module.exports = generateMarkdown;

