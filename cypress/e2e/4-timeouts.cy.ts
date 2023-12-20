Cypress.config("defaultCommandTimeout",15000)
//Though global timeout is mentioned, this will override the global timeout for this suite only
describe('Various Timeouts', () => {
    it('DefaultCommandTimeout', () => {
        cy.visit("https://automationtesting.co.uk/");
        cy.get("randomLocator").click();
    });
});