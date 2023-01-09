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
function renderLicenseSection(license) { }



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { }
return `# ${data.title}

  
module.exports = generateMarkdown;
