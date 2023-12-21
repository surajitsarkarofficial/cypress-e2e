describe('Handle Alerts / Popups ', () => {
    it('handle alerts automatically', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice");
        cy.get("#alertbtn").click();
        
    });
    it('fetch alert text', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice");
        cy.get("#alertbtn").click();
        cy.on('window:alert',(msg)=>{
            expect(msg).to.be.equal("Hello , share this practice page and share your knowledge");
        })
        
    });
    it('dismiss confirm popup', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice");
        cy.get("#confirmbtn").click();
        cy.on('window:confirm',(msg)=>{
            expect(msg).to.be.equal("Hello , Are you sure you want to confirm?");
            return false;
        })
        
    });
    it('accept confirm popup', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice");
        cy.get("#confirmbtn").click();
        cy.on('window:confirm',(msg)=>{
            expect(msg).to.be.equal("Hello , Are you sure you want to confirm?");
            return true;
        })
        
    });
    it.only('handle prompt popup', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.window().then(($win)=>{
            cy.stub($win,"prompt").returns("This text is entered via cypress code");
            //Button that will trigger the propmt popup
            cy.contains("Click for JS Prompt").click();
        })        
        cy.get("#result").should('have.text',"You entered: "+"This text is entered via cypress code")
        
    });
});