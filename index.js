// Required packages for the application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions to gather user input
const questions = [
    {
        type: 'input',
        name: 'title',  
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'List the installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Explain how to use your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide any test instructions:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
];

// Function to create the README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Successfully created README.md!')
    );
}

// Function to initialize the app
function init() {
    inquirer.prompt(questions)
        .then((responses) => {
            // Generate markdown content based on user responses
            const markdownContent = generateMarkdown(responses);
            // Write the markdown content to a README.md file
            writeToFile('README.md', markdownContent);
        })
        .catch((error) => {
            console.error('An error occurred:', error);
        });
}

// Initialize the application
init();
