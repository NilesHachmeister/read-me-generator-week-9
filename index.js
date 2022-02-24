const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
        },
        {
            type: 'input',
            message: "What is your email address?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is your project's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "Please write a short description of your project",
            name: 'description',
        },
        {
            type: 'list',
            message: "What kind of license should your project have?",
            name: 'license',
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "none"]
        },
        {
            type: 'input',
            message: "What command should be run to install dependecies?",
            name: 'install',
        },
        {
            type: 'input',
            message: "What command should be run to run tests?",
            name: 'test',
        },
        {
            type: 'input',
            message: "What does the user need to know about using your repo?",
            name: 'usage',
        },
        {
            type: 'input',
            message: "What does the user need to know about contributing to your repo?",
            name: 'contribution',
        },
    ])
    .then((data) => {


        function renderReadme(title, license, description, install, usage) {
            let licenseBadge = "";

            switch (license) {
                case "MIT": licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
                    break;
                case "APACHE 2.0": licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                    break;
                case "GPL 3.0": licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
                    break;
                case "BSD 3": licenseBadge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
                    break;
                case "none": licenseBadge = "This project uses does not use any licenses"
                    break;
                default: licenseBadge = "This project uses does not use any licenses"
                    break;
            }





            return `# ${title}
${licenseBadge}

## Description

${description}

## Table of Contents

* [Installation](#installation)  

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)


## Installation

To install necessary dependencies, run the following command:

'''
${install}
'''

## Usage

${usage}

## License

## Contributing

## Tests

## Questions

If you have any questions about the repo....

`
        }


        fs.appendFile("README2.md", (renderReadme(data.name, data.license, data.description, data.install, data.usage)), (err) =>
            err ? console.log(err) : console.log("Generating README...")
        );

    });

    // make sure table of contents linsk