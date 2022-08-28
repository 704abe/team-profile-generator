function createManagerTemplate(manager){
  return `
          <div class="profile-box">
            <p>Name: ${manager.getName()}</p>
            <p>ID: ${manager.getId()}</p>
            <p>Email: <a href = "mailto: ${manager.getEmail()}">${manager.getEmail()}</a></p>
            <p>Office Number: ${manager.getOfficeNumber()}</p>
          </div>
  `
}

function createEngineerTemplate(engineer){
  return `
          <div class="profile-box">
            <p>Name: ${engineer.getName()}</p>
            <p>ID: ${engineer.getId()}</p>
            <p>Email: <a href = "mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></p>
            <p>Github: <a href="github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></p>
          </div>
  `       
}

function createInternTemplate(intern){
  return `
          <div class="profile-box">
            <p>Name: ${intern.getName()}</p>
            <p>ID: ${intern.getId()}</p>
            <p>Email: <a href = "mailto: ${intern.getEmail()}">${intern.getEmail()}</a></p>
            <p>School: ${intern.getSchool()}</p>
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
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  </head>
  <body>
    <main>
        <h1>Team Member Profiles</h1> 
        <div class="profiles-container"> 
          ${createTeamMemberTemplate(teamMemberArr)}
        </div>
    </main>
  </body>
</html>`;

}

module.exports = generateHTML