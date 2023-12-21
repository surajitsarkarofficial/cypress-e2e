describe('Handle Cross Origin', () => {
    it('Navigate to a different domain', () => {

        cy.visit("https://the-internet.herokuapp.com/");
        cy.contains("Welcome to the-internet").should('be.visible');

        cy.origin("https://automationtesting.co.uk",()=>{
            cy.visit("/popups.html");
            cy.contains("Popup & Alerts").should('be.visible')
        })

        cy.origin("https://rahulshettyacademy.com/",()=>{
            cy.visit("/AutomationPractice/");
            cy.contains("Practice Page").should('be.visible')
        })
        cy.visit("https://the-internet.herokuapp.com/checkboxes");
        cy.contains("Checkboxes").should('be.visible')

        
    });
});