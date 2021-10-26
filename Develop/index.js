// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
{
    type:'input',
    name:'username',
    message:'what is your GitHub username(required)',
    validate: usernameInput => {
        if (usernameInput) {
            return true;
        } else {
            console.log('Please enter a username');
            return false;
        }
    }
},

{
    type:'input',
    name:'email',
    message:'what is your email address?',

},

{
    type:'input',
    name:'title',
    message:'what is your projects name?',

},

{

    type:'input',
    name:'description',
    message:'Please write a short description of your project',

},

{
    type:'list',
    name:'license',
    message:'Select your projects licensing',
    choices: ['MIT', 'APACHE', 'GPL', 'None']

},

{
    type:'input',
    name:'installation',
    message:'What command should be run to install dependencies?',
},

{
    type:'input',
    name:'run test',
    message:'What command should be run to run test?',
}, 

{
    type:'input',
    name:'user need to know about repo',
    message:'What does the user need to know about using the repo?',

},

{
    type:'input',
    name:'contributing',
    message:'What does the user need to know about contributing to the repo!',

}];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
      if (err) {
        return console.log(err);
      }
    });
  }
    


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("README.md", generateMarkdown(data));
    });
}


// Function call to initialize app
init();
