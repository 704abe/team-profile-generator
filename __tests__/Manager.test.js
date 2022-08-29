const Manager = require("../lib/Manager");

test("Testing officeNumber", () => {
    const officeNumber = 1;
    const testManager = new Manager("James", 1, "john@gmail.com", officeNumber);
    expect(testManager.officeNumber).toBe(officeNumber);
})

test("Testing getOfficeNumber", () => {
    const officeNumber = 1;
    const testManager = new Manager("James", 1, "john@gmail.com", officeNumber);
    expect(testManager.getOfficeNumber()).toBe(officeNumber);
})

test("Testing getRole.", () => {
    const role = "Manager";
    const testManager = new Manager("James", 1, "john@gmail.com", 1);
    expect(testManager.getRole()).toBe(role);
})