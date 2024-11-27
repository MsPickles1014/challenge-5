// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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
            return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
        case 'BSD 3-Clause':
            return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
        default:
            return '';          //====> Returns an empty string for unsupported licenses<=====
    }
}

//================>Creates a function that returns the license link<===========================
//================>If there is no license, return an empty string<============================

  

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license || license === 'None') {
        return ''; // Return an empty string if no license is selected
    }
  
    // Return the license section
    return `
  ## License
  This project is licensed under the **${license}** license. For more information, see the [License Documentation](${renderLicenseLink(license)}).
    `;
  }
function renderLicenseLink(license) {
    if (!license || license === 'None') {
        return '';
    }
    
    switch (license) {                //====> Match the license name to its corresponding link<====
        case 'MIT':
            return 'https://opensource.org/licenses/MIT';
        case 'GPLv3':
            return 'https://www.gnu.org/licenses/gpl-3.0';
        case 'Apache 2.0':
            return 'https://www.apache.org/licenses/LICENSE-2.0';
        case 'BSD 3-Clause':
            return 'https://opensource.org/licenses/BSD-3-Clause';
        default:
            return '';              //====> Return an empty string for unsupported licenses<=====
    }
}

// TODO: Create a function to generate markdown for README
export default function generateMarkdown(data) {
  return `
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
  
  ${renderLicenseSection(data.license)} <!-- Add the license section -->
  
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
  
// export default generateMarkdown;
