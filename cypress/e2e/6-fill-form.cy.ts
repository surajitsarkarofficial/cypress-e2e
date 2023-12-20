describe('Fill a form', () => {
    it('Fill and submit form', () => {
        cy.visit("https://practice-automation.com/form-fields/");
        cy.get('#g1103-name').type("Surajit");
        cy.get('p input[type=checkbox]+label>span').each(($opt)=>{
            if(($opt).text().includes('Milk'))
            {
                cy.wrap($opt).click();
                cy.log("Clicked on Milk")
                return false;
            }
        })
        cy.get('p input[type=radio]+label>span').each(($opt)=>{
            if(($opt).text().includes('Yellow'))
            {
                cy.wrap($opt).click();
                cy.log("Clicked on Yellow")
                return false;
            }
        })
        cy.get('#g1103-doyouhaveanysiblings').select('Yes')
        cy.get("#email").type("s@s.com");
        cy.get("#contact-form-comment-message").type("Hello this is form automation via cypress")
        cy.get("button[type='submit']").each(($btn)=>{
            if($btn.text().includes("Submit"))
            {
                cy.wrap($btn).click();
                return false;
            }
        })
    });
});