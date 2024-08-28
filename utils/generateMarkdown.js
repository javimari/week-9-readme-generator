// Function to return a license badge based on the selected license
// If no license is provided, it returns an empty string
function renderLicenseBadge(license) {
    const licenseBadges = {
      'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      'GPL 3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
      'BSD 3-Clause': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
      'None': '' // Return an empty string if no license is selected
    };
    return licenseBadges[license] || ''; // Default to an empty string if license not found
  }
  
  // Function to return the corresponding license link
  // If no license is provided, it returns an empty string
  function renderLicenseLink(license) {
    const licenseLinks = {
      'MIT': '[MIT](https://opensource.org/licenses/MIT)',
      'Apache 2.0': '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)',
      'GPL 3.0': '[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)',
      'BSD 3-Clause': '[BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)',
      'None': '' // Return an empty string if no license is selected
    };
    return licenseLinks[license] || ''; // Default to an empty string if license not found
  }
  
  // Function to generate the license section for the README
  // Returns a message based on the license selected, or an empty string if none
  function renderLicenseSection(license) {
    if (license === 'None') {
      return 'This project is not licensed.'; // Return a specific message if no license is selected
    }
    return `This project is licensed under the ${renderLicenseLink(license)} license.`; // Include the license link in the section
  }
  
  // Function to generate the markdown content for the README file
  function generateMarkdown(data) {
    return `# ${data.title}
  
  ${renderLicenseBadge(data.license)} // Include the license badge at the top
  
  ## Description
  ${data.description}
  
  ## Table of Contents
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
  ${renderLicenseSection(data.license)} // Include the license section
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions, feel free to reach out:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
  
  For additional inquiries, contact me via email at the provided address.
  `;
  }
  
  // Export the generateMarkdown function to be used in other modules
  module.exports = generateMarkdown;
  