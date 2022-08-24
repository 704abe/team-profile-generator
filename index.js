const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./manager.js');
const Engineer = require('./engineer.js');
const Intern = require('./intern.js');
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");
const template = require("./template.js")

members = [];

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
      members.push(manager);
      addMember();
    });

  }

function addMember () {
    inquirer.prompt([{
        type: "list",
        message: "What role would you like to add to your team?",
        name: "addMemberPrompt",
        choices: ["Engineer", "Intern", "No more team members are needed."]

    }]).then(function (userInput) {
        switch(userInput.addMemberPrompt) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                generateHTML();
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
      members.push(engineer);
      addMember();
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
      members.push(intern);
      addMember();
    });

  }

function generateHTML () {
    console.log("Success!");
    fs.writeFileSync(outputPath, template(members), "UTF-8")
}
