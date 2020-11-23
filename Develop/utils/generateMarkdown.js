// function to generate markdown for README
function generateMarkdown(data) {  
  let shieldUrl;
  switch(data.license){
    case 'Apache License 2.0':
      sheildUrl = 
      break;
    case 'GNU General Public License v3.0':
      sheildUrl = 
      break;
    case 'MIT License':
      sheildUrl = 
      break;
    case 'ISC License':
      sheildUrl = 
      break;
    case 'Other':
      sheildUrl = 
      break;
  }

  return `# ${data.title}
  
  ## description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions?](#questions?)
  ## Installation
  ${data.install}
  ## Usage
  ${data.instruct}
  ## License
  This project is under the license: ${data.license}
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.testInfo}
  ## Questions?
  please refer to: 
  ${data.gitHubUser} --- ${data.userEmail}
  `;
}

module.exports = generateMarkdown;

//may need more under the "license" section!!