const Manager = require('../lib/Manager');

describe("to test the manager class", () =>{

    it("can used to create a new employee", () =>{
        
        const manager = new Manager('Dan','666', 'danieln0014@gmail.com', 'School');
        expect(manager).toBeInstanceOf(Manager); 

    });

    it('can set a new name in the constructor function', () => {
 
        const newName = "Steve";
        const manager = new Manager(newName, "987", "Steve@mail.com", "School");
        expect(manager.name).toBe(newName);

    });

    it('can set a new id in the constructor function', () => {
        
        const ID = "565";
        const manager = new Manager("Kristen", ID, "Kristen@mail.com", "School");
        expect(manager.id).toBe(ID);
    });

    it('can set a new email in the constructor function', () => {
      
        const email = "Jack@jack.com";
        const manager = new Manager("Jack", "121", email, "School");
        expect(manager.email).toBe(email);
    });

    it('returns the role of the manager', () => {
        //testing getPostion()
        const role = "Manager";
        const manager = new Manager("Dan", "666", "dan@dan.com", "38673867");
        const outcome = manager. getPosition();
        expect(outcome).toBe(role);
        
    });

    it('returns a new office number value', ()=>{
       //testing getOfficeNumber()
        const verified = "905204450";
        const manager = new Manager("dan", "585", "dan@mail.com", verified);
        const outcome = manager.getOfficeNumber();
        expect(outcome).toBe(verified);
    });

});
   
