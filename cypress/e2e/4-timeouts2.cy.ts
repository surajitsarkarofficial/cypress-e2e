//Here since there is no spec level Cypress.config(), timeout mentioned hence it will take from the global timeout
describe('Various Timeouts', () => {
    it('DefaultCommandTimeout', () => {
        cy.visit("https://automationtesting.co.uk/");
        cy.get("randomLocator").click();
    });
    it('Element Specific timeout', () => {
        cy.visit("https://automationtesting.co.uk/");
        cy.get("randomLocator",{timeout:7000}).click();
    });
});