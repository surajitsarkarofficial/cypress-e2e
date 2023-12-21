describe('Radio button Tests', () => {
    beforeEach(()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")
    })
    it('select a option', () => {
        cy.get('input[value=radio2]').check().should('be.checked');
    });
    it('select a option based on index', () => {
        cy.get('input[type=radio]').eq(1).check();
        cy.get('input[value=radio2]').should('be.checked');
    });
});