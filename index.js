// Dependencies
const inquirer = require('inquirer');
const fs = require('fs');

// object to outline readME project
const generateMarkdown = ({title, description, installation, usage, license, contributing, tests, github, email}) =>
`
# ${title}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)


# Installation
${installation}

# Usage
${usage}

# Contributing
${contributing}

# Tests
${tests}

# License
${license}

# Questions?
${github}
${email}
`;
// question prompts for sections of readME
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
        },

        {
            type: 'input',
            message: 'Did anyone contribute to your project?',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'What tests have been run?',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'GitHub username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is an email you can be contacted through?',
            name: 'email',
        },
    ])

    // put the answers into the correct spaces on the readME and write a file in a readME.md file.
.then((answers) => {
    const README = generateMarkdown(answers);

    fs.writeFile('readMESample.md', README,
    (err) =>
    err ? console.log(err) : console.log ('Successfully created readME!')
    );
});


