// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const fs = require("fs")

function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "\n![License](https://img.shields.io/badge/License-MIT-yellow.svg)";

    case "Apache License 2.0":
      return "\n![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";

    case "Mozila Public License 2.0":
      return "\n![License](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";

    default:
      return "";

  }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";

    case "Apache License 2.0":
      return "https://opensource.org/licenses/Apache-2.0";

    case "Mozila Public License 2.0":
      return "https://opensource.org/licenses/MPL-2.0";

    default:
      return "";
  }
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    var readmeSection =
      `## License\nThis application is covered under [${license}](${renderLicenseLink(license)})
      ${renderLicenseBadge(license)}`;
    return readmeSection;
  }
  else
    return;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.licenses)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contribute)
  * [Test](#tests)
  * [License](#license)
  * [Questions](#questions)
  
  ## Description
  ${data.description}
  ## Installation
  ${data.install}

  
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contribute}
  ## Tests
  ${data.test}
  ${renderLicenseSection(data.license)}
  ## Questions
  If you have any additional questions  please feel free to contact me on my Github page at https://github.com/${data.github} or email me at ${data.email}`;

}

module.exports = generateMarkdown;




