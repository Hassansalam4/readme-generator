// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js'
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
        name:'usage',
        message:'how do you use it?',
      },{
        type:'input',
        name:'guidelines',
        message:'questions or comments about the guidelines?',
      },{
        type:'input',
        name:'contribution',
        message:'how to contribute to the project',
      },
      {
        type:'input',
        name:'information',
         message:'any useful information?',

      },
      {
        type:'input',
        name:'test',
         message:'how did it work?',

      },{
        type:'list',
        name:'license',
        message:'choose a license',
        choices:['MIT','Apache','BSD2','BSD3','NONE']
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
        let Readinfo=generateMarkdown(data)
        writeToFile('SAMPLE_README.md', Readinfo)
    })
}

// Function call to initialize app
init();
