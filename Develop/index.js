const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    { 
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?\n',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a short description of your project: \n',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please enter any installation instructions: \n',
    },    
    {
        type: 'input',
        name: 'instruct',
        message: 'Please enter instructions on how to use this repository: \n',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What would a person need to know when contributing to this repository?\n',
    },
    {
        type: 'input',
        name: 'testInfo',
        message: 'What would a person need to know about testing this project?\n',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for this project:',
        choices: [
            '1','2','3','4','5','6','7','8',
        ], 
    },

];

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {
        inquirer
        .prompt(questions)
        .then(ans => console.log(ans))
}
// function call to initialize program
init();
