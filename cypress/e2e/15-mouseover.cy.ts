describe('Handle Mouse Over', () => {
    it('mouseover by using trigger', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#mousehover').trigger('mouseover')
        cy.get('.mouse-hover-content a').each((opt)=>{
            cy.log(opt.text())
            if(opt.text()==='Top')
            {
                cy.wrap(opt).click({force:true});
                return;
            }
        })
        cy.url().then((url)=>{
            cy.log(url)
        })
        cy.url().should('include','top')
    });
    it('mouseover by using invoke show', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains("Top").click({force:true})
        cy.url().then((url)=>{
            cy.log(url)
        })
        cy.url().should('include','top')
    });
    it('clicking on the hidden element', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.contains("Top").click({force:true})
        cy.url().then((url)=>{
            cy.log(url)
        })
        cy.url().should('include','top')
    });
    it('Nested Dropdown', () => {
        cy.visit("https://automationtesting.co.uk/dropdown.html#");
        cy.get("#primary_nav_wrap ul li>ul").invoke('show')
        cy.contains("Dog").next().invoke('show')
        cy.contains("German Shepard").click()
        cy.get("#outputMessage").should('have.text',"You clicked on menu option 'German Shepard'");
    });
});