//=====>Creates a function that returns a license badge based on which license is passed in<========
                 //=========> If there is no license, return an empty string<===============

  function renderLicenseBadge(license) {
    if (!license || license === 'None') {
        return 'no license is provided'; 
    }                    //====> Match the license name to its corresponding badge<====
    switch (license) {
        case 'MIT':
            return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
        case 'GPLv3':
            return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
        case 'Apache 2.0':
            return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
        case 'BSD 3-Clause':
            return '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
        default:
            return 'unsupported licenses';     //====> Returns an empty string for unsupported licenses<=====
    }
}

//==============>Creates a function that returns the license section of README<===================
          //===============> If there is no license, return an empty string<=================

function renderLicenseSection(license) {
    if (!license || license === 'None') {
        return ''; 
    }
    return `
    ${renderLicenseLink(license)}
    `;
}

//================>Creates a function that returns the license link<===========================
//================>If there is no license, return an empty string<============================

function renderLicenseLink(license) {
    if (!license || license === 'None') {
        return '';
    }

//====> Matches the license name to its corresponding link<====
    
switch (license) {                
        case 'MIT':
            return 'https://opensource.org/licenses/MIT';
        case 'GPLv3':
            return 'https://www.gnu.org/licenses/gpl-3.0';
        case 'Apache 2.0':
            return 'https://www.apache.org/licenses/LICENSE-2.0';
        case 'BSD 3-Clause':
            return 'https://opensource.org/licenses/BSD-3-Clause';
        default:
            return '';             
    }
}

// ==============>Create a function to generate markdown for README<===============
export default function generateMarkdown(data) {
  return `
  ## Title
  # ${data.title}
  ${renderLicenseBadge(data.license)} <!-- Add the license badge -->

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For any questions, feel free to contact me:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:${data.email})
      `;
  }
  

