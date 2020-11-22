const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

let fileName;

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
        name: 'credit',
        message: 'Are there any collaborators?\n',
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
    console.log("got here!");
}

function checkFileName(data, fileName, idx = 0) {
    if (fs.existsSync(fileName)) {
        idx += 1;
        fileName = `${data.title}_README(${idx}).md`;
        checkFileName(fileName, idx);
    }
    console.log(fileName);
}

const askQuestions = () => {
    inquirer
    .prompt(questions[0])
    .then(ans => {
        fileName = `${ans.title}_README.md`;
        checkFileName(ans, fileName);
        return ans;
    })
    .then(ans => {
        writeToFile(fileName, ans);
    })
    .catch(err => console.log(err))
}

const functionTest = () => console.log('HEYO!');
// function to initialize program
function init() {
    askQuestions();
}
// function call to initialize program
init();
