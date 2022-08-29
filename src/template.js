function createManagerTemplate(manager){
  return `
          <div class="profile-box">
            <div class="profile-header">
              <p>${manager.getName()}</p>
            </div>
            <div class="profile-body">
              <p class="role">${manager.getRole()}</p>
              <p>ID: ${manager.getId()}</p>
              <p>Email: <a href = "mailto: ${manager.getEmail()}">${manager.getEmail()}</a></p>
              <p>Office Number: ${manager.getOfficeNumber()}</p>
            </div>
          </div>
  `
}

function createEngineerTemplate(engineer){
  return `
          <div class="profile-box">
            <div class="profile-header">
              <p>${engineer.getName()}</p>
            </div>
            <div class="profile-body">
              <p class="role">${engineer.getRole()}</p>
              <p>ID: ${engineer.getId()}</p>
              <p>Email: <a href = "mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></p>
              <p>Github: <a href="github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></p>
            </div>
          </div>
  `       
}

function createInternTemplate(intern){
  return `
          <div class="profile-box">
            <div class="profile-header">
              <p>${intern.getName()}</p>
            </div>
            <div class="profile-body">
              <p class="role">${intern.getRole()}</p>
              <p>ID: ${intern.getId()}</p>
              <p>Email: <a href = "mailto: ${intern.getEmail()}">${intern.getEmail()}</a></p>
              <p>School: ${intern.getSchool()}</p>
            </div>
          </div>
  `
}

function createTeamMemberTemplate(teamMemberArr){
  let result = [];
  for (let i = 0; i < teamMemberArr.length; i++) {
    const teamMember = teamMemberArr[i];
    if(teamMember.getRole() === 'Manager'){

      result.push(createManagerTemplate(teamMember));

    } else if (teamMember.getRole() === 'Engineer') {

      result.push(createEngineerTemplate(teamMember));

    } else if (teamMember.getRole() === 'Intern') {

      result.push(createInternTemplate(teamMember));

    }
  }
  return result.join('\n')
}

function generateHTML(teamMemberArr){
  
return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Member Profiles</title>
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <main>
      <header class="page-header">
        <h1>Team Member Profiles</h1> 
      </header>
      <div class="profiles-container"> 
        ${createTeamMemberTemplate(teamMemberArr)}
      </div>
    </main>
  </body>
</html>`;

}

module.exports = generateHTML