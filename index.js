// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');
const { promises } = require('dns');

// TODO: Create an array of questions for user input


const questions = [
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
        message: 'How can someone contribute to this project?',
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
        type:'checkbox', // checkbox to allow user to choose from a selection of different licenses
        message: 'What license would you like to use for your application?',
        name: 'license',
        choices: ['no license','agpl-3.0', 'gpl-3.0', 'lgpl-3.0', 'mpl-2.0', 'apache-2.0', 'mit', 'bsl-1.0', 'unlicense'],
        validate: license => {
            if (license) {
                return true;
            } else {
                console.log('please enter a list of instructions');
                return false;
            }
        }    
    },
    {
        type:'input',
        message:'How do you test this application?',
        name:'test',
        validate: test => {
            if (test) {
                return true;
            } else {
                console.log('please enter instructions on how to test the application');
                return false;
            }
        }    
    },
    {
        type:'input',
        message: 'What is your GitHub username?',
        name: 'username',
        validate: username => {
            if (username) {
                return true;
            } else {
                console.log('please enter your GitHub username');
                return false;
            }
        }    
    },
    {
        type:'input',
        message: 'What is your email address?',
        name: 'email',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('please enter your email so that users can contact you.');
                return false;
            }
        }    
    },
    {
        type:'input',
        message: 'Leave a list of instructions for those who wish to contact you.',
        name: 'contact',
        validate: contact => {
            if (contact) {
                return true;
            } else {
                console.log('please enter a list of instructions for those who wish to contact you');
                return false;
            }
        }    
    },
 ]

// TODO: Create a function to write README file
const writeToFile = contentData => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./utils/new-README.md', contentData, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Your new README file has been generated!'
            })
        })
    })
}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData
    })
}

// Function call to initialize app
init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData)
})
.then(readYou => {
    return writeToFile(readYou)
})
.then(responseFile => {
    console.log(responseFile.message)
})
.catch(err => {
    console.log(err);
});
