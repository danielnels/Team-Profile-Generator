const Engineer = require('../lib/Engineer');

describe("to test the engineer class", () =>{

    it("can used to create a new employee", () =>{
        
        const engineer = new Engineer('Dan','666', 'danieln0014@gmail.com', 'School');
        expect(engineer).toBeInstanceOf(Engineer); 

    });

    it('can set a new name in the constructor function', () => {
 
        const newName = "Steve";
        const engineer = new Engineer(newName, "987", "Steve@mail.com", "School");
        expect(engineer.name).toBe(newName);

    });

    it('can set a new id in the constructor function', () => {
        
        const ID = "565";
        const engineer = new Engineer("Kristen", ID, "Kristen@mail.com", "School");
        expect(engineer.id).toBe(ID);
    });

    it('can set a new email in the constructor function', () => {
      
        const email = "Jack@jack.com";
        const engineer = new Engineer("Jack", "121", email, "School");
        expect(engineer.email).toBe(email);
    });

    it('returns the role of the engineer', () => {
       //testing getRole()
        const role = "Engineer";
        const engineer = new Engineer("Steve", "777", "steve@email.com", "Myname");
        const outcome = engineer.getRole();
        expect(outcome).toBe(role);
        
    });

    it('returns a new github user name value', ()=>{
       //testing getGithub()
        const verified = "Myname";
        const engineer = new Engineer("Bala", "666", "bala@bala.com", verified);
        const outcome = engineer.getGitHub();
        
        expect(outcome).toBe(verified);
    });

});