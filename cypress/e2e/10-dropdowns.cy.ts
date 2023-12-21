describe('Handle dropdowns', () => {
    it('Select based on text', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice");
        cy.get('#dropdown-class-example').select("Option2").should('have.value','option2')
        
    });
    it('Select based on value', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice");
        cy.get('#dropdown-class-example').select("option3").should('have.value','option3')
        
    });
    it('Select based on index', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice");
        cy.get('#dropdown-class-example').select(1).should('have.value','option1')
        
    });
    it('Deselect a value from dropdown', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice");
        cy.get('#dropdown-class-example').select('Option1').should('have.value','option1')
        cy.get('#dropdown-class-example').select([]).should('have.value',null)
        
    });
    it('Dynamic dropdown', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice");
        cy.get('#autocomplete').type('Ind');
        cy.get('.ui-menu-item div').each((opt)=>{
            if(opt.text()==='India')
            {
                cy.wrap(opt).click();
                return;
            }
        })
        cy.get('#autocomplete').should('have.value',"India")
        
    });
});