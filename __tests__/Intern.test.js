const Intern = require("../lib/Intern");

test("Testing school", () => {
    const school = "UCB";
    const newIntern = new Intern("John", 1, "john@gmail.com", school);
    expect(newIntern.school).toBe(school);
});

test("Testing getSchool", () => {
    const school = "UCB";
    const newIntern = new Intern("John", 1, "john@gmail.com", school);
    expect(newIntern.getSchool()).toBe(school);
});

test("Testing role", () => {
    const role = "Intern";
    const newIntern = new Intern("John", 1, "john@gmail.com", "UCB");
    expect(newIntern.getRole()).toBe(role);
});