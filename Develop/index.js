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
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'ISC License',
            'WTFPL',
            'Other',
        ], 
    },
    {
        type: 'input',
        name: 'gitHubUser',
        message: 'What github username is this under?',
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'What email should people use when they have questions?',
    },
    {
        type: 'input',
        name: 'contactInstruct',
        message: 'Are there any specific instructions for people to reach you?\n',
    },
];

// function to write README file
function writeToFile(file, data) {
    fs.writeFile(file, generateMarkdown(data), function(err) {
        if (err) throw err;
        console.log("File Created!");
    })
}

// check fileName for duplicates, if found, appends an idx to make unique
function checkFileName(data, file, idx = 0) {
    if (fs.existsSync(file)) {
        idx += 1;
        fileName = `${data.title}_README(${idx}).md`;
        checkFileName(data, fileName, idx);
    }
    // console.log(fileName);
}

// added step in case other functionality was wanted in init()
const askQuestions = () => {
    inquirer
    .prompt(questions)
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

// function to initialize program
function init() {
    askQuestions();
}
// function call to initialize program
init();
