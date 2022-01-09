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
    name: 'description',
    message: 'Provide a description of your project.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license do you want?',
    choices: ['Apache 2.0','GNU GPL 3', 'IBM', 'MIT', 'Mozilla', 'No License','test'],
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
    name: 'github',
    message: 'What is your github user name?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your e-mail address?',
  },
]

module.exports = questions