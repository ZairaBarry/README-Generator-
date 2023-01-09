// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { validateHeaderName } = require('http');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Please include your project title.',
  },

  {
    type: 'input',
    name: 'description',
    message: 'Please include your project description.',
  },

  {
    type: 'input',
    name: 'content',
    message: 'Please enter your table of content.',
  },

  {
    type: 'input',
    name: 'installation',
    message: 'Please enter your installation instructions.',
  },

  {
    type: 'input',
    name: 'usage',
    message: 'Please enter usage information.',

  },

  {
    type: 'input',
    name: 'contribute',
    message: 'Please enter contribution guidelines.',
  },

  {
    type: 'input',
    name: 'tests',
    message: 'Please enter tests instructions.',

  },


  {
    type: 'confirm',
    name: 'confirmLicenses',
    message: 'Would you like to include licence?',
    default: false
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose the type of license.',
    choices: ["MIT", "Apache License 2.0", "Mozila Public License 2.0"],

  },

  {
    type: 'input',
    name: 'github',
    message: ' Please include your GitHub username. ',
  },

  {
    type: 'input',
    name: 'email',
    message: 'Please include your email address.',
  }

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data),
    (err) => err ? console.log(err) : console.log("Congratulations!  You have created your README file\n"))
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((response) => writeToFile('./generated_readme/README.md', response))

}

// Function call to initialize app
init();
