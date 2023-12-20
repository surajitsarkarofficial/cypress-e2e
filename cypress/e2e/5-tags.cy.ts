describe.only('Suite 1', () => {
    it('S1T1', () => {
        cy.log("this is S1T1")
    });
    it.skip('S1T2', () => {
        cy.log("this is S1T2")
    });
});
describe.skip('Suite 2', () => {
    it('S2T1', () => {
        cy.log("this is S2T1")
    });
    it.only('S2T2', () => {
        cy.log("this is S2T1")
    });
});