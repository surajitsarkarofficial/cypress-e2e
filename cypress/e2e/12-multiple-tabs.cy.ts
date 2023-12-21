describe('Handle Multiple Tabs', () => {
    it('Handle Tab using remove attr', () => {
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.contains("Click Here").invoke('removeAttr','target').click();
        cy.contains("New Window").should('be.visible')
        cy.go('back')
        cy.contains("Opening a new window").should('be.visible')
    });
    it('Handle Tab using self target', () => {
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.contains("Click Here").invoke('attr','target','_self').click();
        cy.contains("New Window").should('be.visible')
        cy.go('back')
        cy.contains("Opening a new window").should('be.visible')
    });
});