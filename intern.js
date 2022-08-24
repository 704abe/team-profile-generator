const Member = require('./member');

class Intern extends Member {
    constructor(name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
}

module.exports = Intern;