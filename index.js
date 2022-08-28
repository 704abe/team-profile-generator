const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const template = require("./src/template.js");

const teamMembers = [];

addManager();

function addManager() {
    inquirer.prompt ([

      {
        type: "input",
        name: "managerName",
        message: "Enter manager's name"
      },

      {
        type: "input",
        name: "managerId",
        message: "Enter manager's ID number"
      },

      {
        type: "input",
        name: "managerEmail",
        message: "Enter manager's email address"
      },

      {
        type: "input",
        name: "managerOfficeNumber",
        message: "Enter manager's office number"
      }

    ]).then(data => {
      const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber);
      teamMembers.push(manager);
      addTeamMember();
    });

  }

function addTeamMember () {
    inquirer.prompt([{
        type: "list",
        message: "What role would you like to add to your team?",
        name: "addTeamMemberPrompt",
        choices: ["Engineer", "Intern", "No more team teamMembers are needed."]

    }]).then(function (userInput) {
        switch(userInput.addTeamMemberPrompt) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                writeToHTML();
        }
    })
}

function addEngineer() {
    inquirer.prompt([

      {
        type: "input",
        name: "engineerName",
        message: "Enter the engineer's name"
      },

      {
        type: "input",
        name: "engineerId",
        message: "Enter the engineer's ID number" 
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "Enter the engineer's email address"
      },

      {
        type: "input",
        name: "engineerGithub",
        message: "Enter the engineer's GitHub username"
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamMembers.push(engineer);
      addTeamMember();
    });

  }

  function addIntern() {
    inquirer.prompt([

      {
        type: "input",
        name: "internName",
        message: "Enter the intern's name"
      },

      {
        type: "input",
        name: "internId",
        message: "Enter the intern's ID number" 
      },

      {
        type: "input",
        name: "internEmail",
        message: "Enter the intern's email address"
      },

      {
        type: "input",
        name: "internSchool",
        message: "What school does the intern attend?"
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamMembers.push(intern);
      addTeamMember();
    });

  }

function writeToHTML() {
    console.log('generate');
    fs.writeFileSync('./dist/index.html' , template(teamMembers), "UTF-8");
}
