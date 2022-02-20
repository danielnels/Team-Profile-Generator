const Intern = require('../lib/Intern');


describe("to test the intern class", () =>{

    it("can used to create a new intern", () =>{
        
        const intern = new Intern('Dan','666', 'danieln0014@gmail.com', 'School');
        expect(intern).toBeInstanceOf(Intern); 

    });

    it('can set a new name in the constructor function', () => {
 
        const newName = "Steve";
        const intern = new Intern(newName, "987", "Steve@mail.com", "School");
        expect(intern.name).toBe(newName);

    });

    it('can set a new id in the constructor function', () => {
        
        const ID = "565";
        const intern = new Intern("Kristen", ID, "Kristen@mail.com", "School");
        expect(intern.id).toBe(ID);
    });

    it('can set a new email in the constructor function', () => {
      
        const email = "Jack@jack.com";
        const intern = new Intern("Jack", "121", email, "School");
        expect(intern.email).toBe(email);
    });
      // test getName()
      it('can get the intern name by calling the getName() method', () => {

        const name = 'dan';
        const intern = new Intern(name, 17, 'dan@dan.com');
        const outcome = intern.getName();
        expect(outcome).toBe(name);
    });


    // test getEmail()
    it("can get the intern email by calling the getEmail() method", () => {

        const verified = "dan@email.com";
        const intern = new Intern("dan", 17, verified);
        const outcome = intern.getEmail();

        expect(outcome).toBe(verified);
    });

    // test getId()
    it("can get the intern id by the calling getId() method", () => {

        const verified = "404";
        const intern = new Intern("dan", verified, 'dan@email.com');
        const outcome = intern.getID();

        expect(outcome).toBe(verified);
    });

    it('returns the role of intern', () => {
        
        const role = "Intern";
        const intern = new Intern("Marley", "141", "marley@mail.com", "School");
        const outcome = intern.getRole();
        expect(outcome).toBe(role);
        
    });

    it('returns a new school value ', ()=>{
       //testing getSchool()
        const verified = "School";
        const intern = new Intern("Gary", "382", "Gary@mail.com", verified);
        const outcome = intern.getSchool();
        expect(outcome).toBe(verified);
    });

});