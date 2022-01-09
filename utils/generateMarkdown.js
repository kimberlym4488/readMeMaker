

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case  ('Apache 2.0'):
      `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) \n \nLicense Link: https://opensource.org/licenses/Apache-2.0`;
      break;
    case 'GNU GPL V3':
      `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) \n \nLicense Link: https://www.gnu.org/licenses/gpl-3.0 `;
      break;
    case 'IBM':
      `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0) \n \nLicense Link: https://opensource.org/licenses/IPL-1.0`;
      break;
    case 'MIT':
      `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n License Link: https://opensource.org/licenses/MIT`;
      break;
    case 'Mozilla':
      `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)\n License Link: https://opensource.org/licenses/MPL-2.0`;
      break;  
    default: "";
  }
}

//Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license === 'No License'){
  return "";
} else{
return renderLicenseBadge(license)
}}

//TODO: Create a function to generate markdown for README

function generateMarkdown({name, title, description, license, contribution, installation, usage, testIns, github, email}) {

return `
# ${title}

## Table of Contents
>[Author Name](Author_Name) 

>[Description](Description)

>[Installation Instructions](Installation)

>[Usage Instructions](Usage)

>[Test Instructions](Test_Instructions)

>[Contribution Guidelines](Contribution)

>[GitHub username](GitHub_userName)

>[Contact Me!](Contact_me_with_questions!)

>[License](##-License)

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
${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;

