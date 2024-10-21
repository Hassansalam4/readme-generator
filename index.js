// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import { type } from 'os';
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your project?',

      },{
        type: 'input',
        name:'description',
        message:'what is the description of your project?',
      },{
        type:'input',
        name:'installation',
        message:'how to install this project?',
      },{
        type:'input',
        name:'information',
        message:'how do you use it?',
      },{
        type:'input',
        name:'guidelines',
        message:'questions or comments about the guidelines?',
      },{
        type:'input',
        name:'test',
         message:'how did it work?',
      }

  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) =>
        err ? console.log(err) : console.log('Successfully created readme.md')
      );
  
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
        questions
    ).then((data)=>{
        console.log(data)
    })
}

// Function call to initialize app
init();
