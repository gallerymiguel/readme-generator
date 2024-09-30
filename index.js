// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a short description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license will your project use?',
      choices: [
        'MIT',
        'GPLv3',
        'Apache 2.0',
        'None'
      ],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What are the contribution guidelines?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How do you run tests for this project?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    }
  ];
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {  
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error('Error writing to file', err);
        return;
      }
      console.log(`${fileName} has been successfully created!`);
    });
  }

// TODO: Create a function to initialize app
function init() {
    // Prompt user for input using inquirer
    inquirer.prompt(questions)
      .then((answers) => {
        // Generate the Markdown content based on user input
        const markdownContent = generateMarkdown(answers);
  
        // Write the generated Markdown to a README file
        writeToFile('README.md', markdownContent);
      })
      .catch((error) => {
        console.error('Error during prompting', error);
      });
  }

// Function call to initialize app
init();
