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
            message: "What hoes the user need to know about using your repo?",
            name: 'usage',
        },
        {
            type: 'input',
            message: "What does the user need to know about contributing to your repo?",
            name: 'contribution',
        },
    ])
    .then((data) => {


        function renderReadme(title, license) {
            let licenseBadge = license;

            return `# ${title}
 
            `
        }


        fs.appendFile("README2.md", (renderReadme(data.name, data.license)), (err) =>
            err ? console.log(err) : console.log("Generating README...")
        );

    });