// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data)  {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}
${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Information](#information)
- [Guidelines](#guidelines)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseSection}

## Contributing
${data.contributing}

## Information
${data.information}

## Guidelines
${data.guidelines}

## Tests
${data.tests}

## Questions
If you have any questions, feel free to reach out via [GitHub](https://github.com/${data.github}) or email me at ${data.email}.
`;
}
export default generateMarkdown;
