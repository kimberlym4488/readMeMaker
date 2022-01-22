//Questions to export for inquirer to prompt the user
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the your name?',
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'pageURL',
    message: 'What is the URL of your deployed page/application?',
  },
  {
    type: 'input',
    name: 'repoURL',
    message: 'What is the URL of your project repository?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license do you want?',
    choices: ['Apache 2.0','GNU GPL 3', 'IBM', 'MIT', 'Mozilla', 'No License'],
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What are the contribution guidelines?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for the end user.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How would a user use this project?',
  },
  {
    type: 'input',
    name: 'testIns',
    message: 'How would a user test your application?',
  },
  {
    type: 'input',
    name: 'image',
    message: 'Provide a preview image of your page/application',
  },
  {
    type: 'input',
    name: 'video',
    message: 'Provide a video walkthrough link for your application',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your github user name?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your e-mail address?',
  },
]//exporting the questions for inquirer
module.exports = questions