// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is a description of your project?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What is required to install your project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What is required for the usage of your product?',
            name: 'usage',
        },
        {
            type: 'checkbox',
            message: 'What is your project license?',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1',' Mozilla Public License 2.0', 'The Unilicense'],
            name: 'license',
            // 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1',' Mozilla Public License 2.0', 'The Unilicense'
        },

        {
            type: 'input',
            message: 'Who contributed to your project?',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'What tests have been run?',
            name: 'tests',
        },
        {
            type: 'confirm',
            message: 'Do you have questions about the project?',
            name: 'questions',
        },
    ])
    
.then((answers) => {
    const README = writeToFile (answers);

    fs.writeFile('readMe Generator', README,
    (err) =>
    err ? console.log(err) : console.log ('Successfully created readME!')
    );
});
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// console.log("Hello World!")