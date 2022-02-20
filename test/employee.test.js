const Employee = require('../lib/Employee');


describe('Employee class test', () => {



    // Create new employee
    it('can create new employee', () => {

        const employee = new Employee("dan", 666, "dan@dan.com")
        expect(employee).toBeInstanceOf(Employee);

    })

    // Describe
    it('can set a new name in the constructor function', () => {
        // Act
        const name = 'dan';
        const employee = new Employee(name, 16, "dan@dan.com");
        // Assert
        expect(employee.name).toBe(name);
    })


    it("can set a new id in the constructor function", () => {
        const id = "666";
        const employee = new Employee('dan', id, "dan@dan.com");
        expect(employee.id).toBe(id);
    });

    it("can set a new email in the constructor function", () => {
        const email = "dan@dan.com";
        const employee = new Employee("dan", '666', email);
        expect(employee.email).toBe(email);
    });

     // test getName()
    it('can get the employee name by calling the getName() method', () => {
        
        const name = 'dan';


        const employee = new Employee(name, 17, 'dan@dan.com');

        const outcome = employee.getName();

        expect(outcome).toBe(name);
    });


    // test getEmail()
    it("can get the employee email by calling the getEmail() method", () => {

        const verified = "dan@email.com";


        const employee = new Employee("dan", 17, verified);

        const outcome = employee.getEmail();

        expect(outcome).toBe(verified);
    });

    // test getId()
    it("can get the employee id by the calling getId() method", () => {

        const verified = "404";


        const employee = new Employee("dan", verified, 'dan@email.com');

        const outcome = employee.getID();

        expect(outcome).toBe(verified);
    });

    // test getRole()
    it("can get the employee role by calling the getRole() method", () => {

        const verified = "Employee";


        const employee = new Employee("dan", 17, 'asd@.com');

        const outcome = employee.getRole();

        expect(outcome).toBe(verified);
    });


})