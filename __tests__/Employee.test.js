const Employee = require('../lib/Employee');

test("Testing new Employee.", () => {
        const testEmployee = new Employee();
        expect(typeof(testEmployee)).toBe("object");
    })

test("Testing name", () => {
    const name = "John";
    const testEmployee = new Employee(name);
    expect(testEmployee.name).toBe(name);
})

test("Testing id", () => {
    const id = 1;
    const testEmployee = new Employee("John", id);
    expect(testEmployee.id).toBe(id);
})

test("Testing email", () => {
    const email = "John@gmail.com";
    const testEmployee = new Employee("John", 1, email);
    expect(testEmployee.email).toBe(email);
})

test("Testing getName", () => {
    const name = "John";
    const testEmployee = new Employee(name);
    expect(testEmployee.getName()).toBe(name);
})

test("Testing getId", () => {
    const id = 1;
    const testEmployee = new Employee("John", id);
    expect(testEmployee.getId()).toBe(id);
})

test("Testing getEmail", () => {
    const email = "john@gmail.com";
    const testEmployee = new Employee("John", 1, email);
    expect(testEmployee.getEmail()).toBe(email);
})

test("Testing getRole", () => {
    const role = "Employee";
    const testEmployee = new Employee("John", 1, "John@gmail.com");
    expect(testEmployee.getRole()).toBe(role);
})