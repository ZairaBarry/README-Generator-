// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown= require ('./utils/generateMarkdown');
const { validateHeaderName } = require('http');


// TODO: Create an array of questions for user input
const questions = [
  {
    type:'input',
    name:'title',
   message : 'Please include your project title',

   validate: (titleInput) => {
    if (titleInput) {
      return(true);
    }else {
        console.log("Please enter your project title")
        return(false);
     }
    }
  },

  {
    type:'input',
    name:'description',
   message : 'Please include your project description',

   validate: (descriptionInput) => {
    if (descriptionInput) {
      return(true);
    }else {
        console.log("Please enter your project description")
        return(false);
     }
    }
  },

  {
    type: 'input',
    name: 'content',
    message: 'Please enter your table of content',

    validate: (contentInput) => {
      if (contentInput) {
        return true;
      } else {
        console.log("Please enter the Table of Contents.");
        return false;
      }
    },
  },

  {
    type: 'input',
    name: 'installation',
    message: 'Please enter your intsllation instructions',

    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please enter the installation instrauctions!");
        return false;
      }
    },
  },

  {
    type: 'input',
    name: 'usage',
    message: 'Please enter usage information',

    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter the usage information!");
        return false;
      }
    },
  },

  {
    type: 'input',
    name: 'contribution',
    message: 'Please enter contributiin guidelines',

    validate: (contributionInput) => {
      if (contributionInput) {
        return true;
      } else {
        console.log("Please enter the contribution details !");
        return false;
      }
    },
  },



  {
    type: 'input',
    name: 'tests',
    message: 'Please enter tests instructions',

    validate: (testsInput) => {
      if (testsInput) {
        return true;
      } else {
        console.log("Please enter tests instructions!");
        return false;
      }
    },
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
    message: 'Please choose the type of license',
    choices: ["MIT", "Apache License 2.0", "Mozila Public License 2.0"],

    when: ({ confirmLicenses }) => {
      if (confirmLicenses) {
        return true;
      } else {
        return false;
      }
    },
  },

  {
    type: 'input',
    name: 'github',
    message: ' Please include your GitHub username ',

    validate: (gitInput) => {
      if (gitInput) {
        return true;
      } else {
        console.log("Please enter the link to your gitHub profile!");
        return false;
      }
    },
  },

  {
    type: 'input',
    name: 'email',
    message: 'Please include your email address.',

    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email address!");
        return false;
      }
    },
  },
];





// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    
}

// Function call to initialize app
init();
