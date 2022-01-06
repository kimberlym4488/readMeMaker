// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateHTML= require('./utils/build')
const questions = require('./utils/questions')
// TODO: Create an array of questions for user input

//prompt working but not importing build or questions from js 


// TODO: Create a function to write README file
//writeToFile = () => {
inquirer
    .prompt(questions)
    
    .then((answers) =>
    {
        fs.writeFile('index.html', generateHTML(answers),
        (err) =>
        err ? console.error(err) : console.log('Success'))
    })


.catch((error) =>{
        if(error.isTtyError) {
        }
        else{

        }
    })




// TODO: Create a function to initialize app
//init = () => writeToFile();


// Function call to initialize app
//init();
