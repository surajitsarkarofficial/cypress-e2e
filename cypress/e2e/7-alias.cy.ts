describe('Cypress Alias', () => {

    beforeEach(()=>{
        cy.visit("https://practice-automation.com/form-fields/");
        cy.get('h1[itemprop=headline').invoke('text').as("headline");

    })
    it('Alias', ()=>{
        
        //cy.visit("https://practice-automation.com/form-fields/");
        //cy.get('h1[itemprop=headline').invoke('text').as("headline");
        
        cy.get("@headline").should('equal','Form Fields')

    });

    it('access the alias in diff test',()=>{
        //cy.visit("https://practice-automation.com/form-fields/");
        cy.get("@headline").should('equal','Form Fields')
    })
});