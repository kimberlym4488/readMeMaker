

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license === 'Apache 2.0'){
  return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) \n \nLicense Link: https://opensource.org/licenses/Apache-2.0`
}
}



//Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license === 'No License'){
  return "";
}
return renderLicenseBadge(license)
}

//TODO: Create a function to generate markdown for README

function generateMarkdown({name, title, description, license, contribution, installation, usage, testIns, github, email}) {

  return `
  # ${title}
Portfolio page for web developer ${name}.

## Table of Contents
>[Author Name](Author_Name) 

>[Installation Instructions](Description)

>[Installation Instructions](Installation)

>[Usage Instructions](Usage)

>[Test Instructions](Test_Instructions)

>[GitHub username](GitHub_userName)

>[Contribution Guidelines](Contribution)

>[License](License)

>[Contact Me!](Contact_me_with_questions!)

## Author Name
${name}}

## > Project Description
${description}

## Installation
${installation}

## Usage
${usage}

## Test Instructions
${testIns}

## GitHub userName
${github}

## Contribution
${contribution}

## Contact me with questions!
${email}

## License
${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;

