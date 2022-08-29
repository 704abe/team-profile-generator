const Engineer = require("../lib/Engineer");

test("Testing github", () => {
    const github = "john";
    const newEngineer = new Engineer("John", 1, "john@gmail.com", github);
    expect(newEngineer.github).toBe(github);
})

test("Testing getGithub", () => {
    const github = "john";
    const newEngineer = new Engineer("John", 1, "john@gmail.com", github);
    expect(newEngineer.getGithub()).toBe(github);
})

test("Testing getRole", () => {
    const role = "Engineer";
    const newEngineer = new Engineer("John", 1, "john@gmail.com", "john");
    expect(newEngineer.getRole()).toBe(role);
})