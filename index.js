// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input

// Github username & email to be added to question section

inquirer
 .prompt([
    {
        type:'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: title => {
            if (title) {
                return true;
            } else {
                console.log('please enter a title for your repository');
                return false;
            }
        }
    },
    {
        type:'input',
        message: 'Add a description to your README.',
        name: 'description',
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log('please enter a descpription for your repository');
                return false;
            }
        }
    },
    {
        type:'input',
        message: 'How do you install this application?',
        name: 'installation',
        validate: install => {
            if (install) {
                return true;
            } else {
                console.log('please enter a list of instructions');
                return false;
            }
        }
    },
    {
        type:'input',
        message: 'What technologies were used to create this project?',
        name: 'technology',
        validate: technology => {
            if (technology) {
                return true;
            } else {
                console.log('please enter any technologies used to create this project');
                return false;
            }
        }
    },
    {
        type:'input',
        message: 'How can a user use this application?',
        name: 'usage',
        validate: usage => {
            if (usage) {
                return true;
            } else {
                console.log('please enter a list of instructions');
                return false;
            }
        }
    },
    {
        type:'input',
        message: 'List all contributors and a link to their GitHub.',
        name: 'contributors',
        validate: contributors => {
            if (contributors) {
                return true;
            } else {
                console.log('please enter a list of instructions');
                return false;
            }
        }
    },
    {
        type:'checkbox',
        message: 'What license would you like to use for your application?',
        name: 'license',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        validate: title => {
            if (title) {
                return true;
            } else {
                console.log('please enter a list of instructions');
                return false;
            }
        }    
    },
    {
        type:'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type:'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type:'input',
        message: 'Leave a list of instructions for those who wish to contact you.',
        name: 'email',
    },
 ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
