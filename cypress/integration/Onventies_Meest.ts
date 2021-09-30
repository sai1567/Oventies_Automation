
describe("Onventies Automation Task for meest application", () =>  {

    var userID = "";
    var password = "";

    beforeEach(() =>{
        
        cy.visit('https://me24.meest-group.com/');
        cy.get('.v-expand > :nth-child(7) > .v-button > .v-button-wrap > .v-button-caption').click();
        cy.wait(3000);
    })
    //Meest Login
    it("Login to Meest Application", () => {
       
        cy.get('#gwt-uid-4').type(userID);
        cy.get('#gwt-uid-6').type(password);
        cy.get('label > font').click();
        cy.get('.v-verticallayout > .v-slot-custom > .v-button > .v-button-wrap > .v-button-caption').click();
        console.log("Login successfull")
    })


     // Meest Forgot password
    it("Forgot Password", () => {
       cy.get('.v-verticallayout > :nth-child(1) > .v-button > .v-button-wrap > .v-button-caption').click();
       cy.wait(1000);
       cy.get('.v-window').get('#gwt-uid-9').type(userID);
       cy.get('.v-window').get('.v-slot-primary > .v-button > .v-button-wrap > .v-button-caption').click();
       cy.document()
    })

    
    // Rigister Application
      it("Register to Meest Application", () => {
        cy.get('.v-button-caption > font').click();
        cy.get('#gwt-uid-9').type(userID);
        cy.wait(1000)
        cy.readFile('input.txt').then(function(inputVal1) {
            const finalinputVal = Number(inputVal1)+Number(1)
            cy.get('#help_'+finalinputVal).type(password);
            cy.get('#gwt-uid-13').type(password);
            cy.get('small > font').click();
            cy.get('.v-slot-custom > .v-button > .v-button-wrap > .v-button-caption').click();
            cy.get('#gwt-uid-16').invoke('text').then((finalRegistration) => {

               expect(finalRegistration).to.eq('Thank you for registration Registration email has been sent.');

            cy.writeFile('input.txt',finalinputVal.toString)


        })
      })

       })
        

       
      
        
    })


