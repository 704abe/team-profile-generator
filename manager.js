const Member = require('./member');

class Manager extends Member {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;