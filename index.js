//require certain packages to run, ask the questions, generate the file, and then write the file. 
//Inquirer will prompt the user for the questions.
const inquirer = require('inquirer')
//Allows us to write the file
const fs = require('fs')
//contains the license badges and template literal to fill the MD
const generateMD= require('./utils/generateMarkdown')
//Questions we want to ask
const questions = require('./utils/questions')

//writes the answers and template literal to a new file for the user. Catches errors if applicable.
inquirer
    .prompt(questions)
    
    .then((answers) =>
    {
        fs.writeFile('MARKDOWN.md', generateMD(answers),
        (err) =>
        err ? console.error(err) : console.log('Success! Your "MARKDOWN.md" file is located in your files'))
    })

.catch((error) =>{
        if(error.isTtyError) {
        }
        else{
        }
    })

