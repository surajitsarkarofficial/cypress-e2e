describe('Handle Checkboxes', () => {

    beforeEach(()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")
    })
    it('Select a single option', () => {
        cy.get('#checkBoxOption1').should('not.be.checked').and('be.enabled');
        cy.get('#checkBoxOption1').check().should('be.checked')
    });
    it('Select a multiple option', () => {
        cy.get('input[type=checkbox]').check(['option2','option3'])
        cy.get('#checkBoxOption1').should('not.be.checked')
        cy.get('#checkBoxOption2').should('be.checked')
        cy.get('#checkBoxOption3').should('be.checked')
    });
    it('Un Select a  option', () => {
        //select all the options
        cy.get('input[type=checkbox]').check()
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked')
        cy.get('#checkBoxOption3').should('be.checked')
        cy.get('#checkBoxOption3').check().should('be.checked')
    });
});