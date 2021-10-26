// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `## Badges
  ![Badges](https://img.shields.io/badge/license-MIT-brightgreen)
    `
  } else if (license === 'APACHE') {
    return `## Badges
  ![Badges](https://img.shields.io/badge/license-APACHE-brightgreen)
    `
  } else if (license === 'GPL') {
    return `## Badges
  ![Badges](https://img.shields.io/badge/license-GPL-brightgreen)
    `
  } else{
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `## license
  MIT Link: https://opensource.org/licenses/MIT
    `
  } else if (license === 'APACHE') {
    return `## license
  Apache Link: http://www.apache.org/licenses/LICENSE-2.0 
    `
  } else if (license === 'GPL') {
    return `## license
  GPL Link: https://opensource.org/licenses/GPL-3.0
    `
  } else{
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'None') {
    return `
  ${renderLicenseLink(license)}
  ${renderLicenseBadge(license)}
    `
  } else {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of content
  * [Description](#description)
  * [Installation](#Installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#License)
  * [Badges](#badges)
  * [Features](#features)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Question](#questions)

  ## Description
  ${data.description}

  ## Installation 

  ## Usage

  ## Credits 

  ${renderLicenseSection(data.license)}

  ## Features

  ## Contributing 

  ## Test 

  ## Question 

`;
}

module.exports = generateMarkdown;
