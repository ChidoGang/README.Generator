// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions =()=>  {

return inquirer ([
{
    type:'input',
    name:'username',
    message:'what is your GitHub username(required)',
},

{
    type:'input',
    name:'email',
    message:'what is your email address?',

},

{
    type:'input',
    name:'Projects name',
    message:'what is your projects name?',

},

{

    type:'input',
    name:'short Description',
    message:'Please write a short description of your project',

},

{
    type:'input',
    name:'Licensing',
    message:'Select your projects licensing',

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

},

])
};

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
      if (err) {
        return console.log(err);
      }
    });
  }
    


// TODO: Create a function to initialize app

inquirer.prompt(questions).then((data) => {
    console.log(JSON.stringify(data, null, " "));
    data.getLicense = getLicense(data.license);
    writeToFile("./example/README.md", data);
  });



// Function call to initialize app
init();
