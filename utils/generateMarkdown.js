

// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'Apache 2.0'){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) <br>  License Link:<br> https://opensource.org/licenses/Apache-2.0"}

    else if(license === 'GNU GPL V3') {
     return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) <br>  License Link: <br> https://www.gnu.org/licenses/gpl-3.0"}

    else if (license === 'IBM'){
      return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0) <br> License Link: <br>  https://opensource.org/licenses/IPL-1.0"}
    
    else if (license === 'MIT') {
     return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)<br> License Link:<br>  https://opensource.org/licenses/MIT"}

    else if (license === 'Mozilla'){
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)<br>  License Link:<br>  https://opensource.org/licenses/MPL-2.0"}
 
    else if (license === 'No License'){
       return ""}
         
    else{
      "No license was selected."
    }
  }

//Generates a markdown for README

function generateMarkdown({name, title, description, license, contribution, image, video, repoURL, pageURL, installation, usage, testIns, github, email}) {
  //template literal will fill the MARKDOWN.md file using the functions passed in and array objects above.
return `
# ${title}

## License
${renderLicenseBadge(license)}

## Table of Contents
>[Author Name](#author-name) <br>
>[Deployed Page/Application Link](#deployed-page) <br>
>[Project Description](#project-description)<br>
>[Installation](#installation)<br>
>[Usage](#usage)<br>
>[Test Instructions](#test-instructions)<br>
>[Contribution Guidelines](#contribution)<br>
>[Preview Image](#preview-image)<br>
>[Video Walkthrough](#video-walkthrough)<br>
>[GitHub username](#github-username)<br>
>[Contact Me!](#contact-me-with-questions)<br>

## Author Name
${name}

## Deployed Page
${pageURL}

## GitHub Repo
${repoURL}

## Project Description
${description}

## Installation
${installation}

## Usage
${usage}

## Test Instructions
${testIns}

## Contribution
${contribution}

## Video Walkthrough
${video}

## Preview Image
${image}

## GitHub userName
${github}

## Contact me with questions
${email}

`;
}

//Exports our template literal for import by index.js
module.exports = generateMarkdown;

