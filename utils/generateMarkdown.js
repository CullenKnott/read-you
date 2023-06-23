// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `![badge](https://img.shields.io/badge/license-${license}-green)`;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
  } else {
    return ' '
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `## [License](#table-of-contents)
    
    The application is covered under the following license`
  } else {
    return ' '
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ${renderLicenseBadge(data.license)}

  ## Table-of-contents

  * [Installation]
  * [Technology](#technology)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Test](#tests)
  * [Questions](#questions)

  ## [Installation](#table-of-contents)

  ${data.installation}

  ## [Technology](#table-of-contents)

  ${data.technology}

  ## [Usage](#table-of-contents)

  ${data.usage}

  ## [Contributors](#table-of-contents)

  ${data.contributors}

  ## [Test](#table-of-contents)

  ${data.test}

  ## [Questions](#table-of-contents)

  For any questions you may have:

  ${data.contact}

  Contact Info:

  [GitHub](https://github.com/${data.username})
  [Email: ${data.email}](mailto:${data.email})

  ${renderLicenseSection}

  ${renderLicenseLink}
`;
}

module.exports = generateMarkdown;
