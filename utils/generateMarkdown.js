// Import necessary modules
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// List of questions to collect user input for the README file
const questions = [
    {
        type: 'input',
        name: 'title', 
        message: 'Enter the title of your project:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the installation process:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for using the project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Explain how others can contribute to the project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions on how to run tests for your project:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    }
];

// Function to write data to a README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('README.md has been created successfully!');
        }
    });
}

// Function to initialize the application
function init() {
    // Prompt the user with the list of questions
    inquirer.prompt(questions)
        .then((answers) => {
            // Generate markdown content using user-provided answers
            const markdown = generateMarkdown(answers);
            // Write the generated content to 'README.md'
            writeToFile('README.md', markdown);
        })
        .catch((error) => {
            console.error('An error occurred during initialization:', error);
        });
}

// Start the application
init();
