// function to generate markdown for README
function generateMarkdown(data) {  
  //determine which shield/badge to use:
  let shieldUrl;
  switch(data.license){
    case 'Apache License 2.0':
      shieldUrl = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'GNU General Public License v3.0':
      shieldUrl = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      break;
    case 'MIT License':
      shieldUrl = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
    case 'ISC License':
      shieldUrl = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
      break;
    case 'WTFPL':
      shieldUrl = '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'
    case 'Other':
      shieldUrl = '![License: Other](https://img.shields.io/static/v1.svg?label=License&message=Other&color=blue)'
      break;
  }

  //actual markdown code
  return `# ${data.title}
  ${shieldUrl}
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
  [${data.gitHubUser}](https://github.com/${data.gitHubUser}) 
  Email:
  ${data.userEmail}
  `;
}

module.exports = generateMarkdown;

//may need more under the "license" section!!