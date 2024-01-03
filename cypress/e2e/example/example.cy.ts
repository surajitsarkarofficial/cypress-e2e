import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";

Given('I open url',()=>{
    cy.visit("https://practice-automation.com/form-fields/")
})
When('I do some action',()=>{
    cy.get('#g1103-name').type("Surajit");
    cy.get("button[type='submit']").each(($btn)=>{
        if($btn.text().includes("Submit"))
        {
            cy.wrap($btn).click();
            return false;
        }
    })
})
Then('I get some result',()=>{
    Cypress.on('window:alert',(msg)=>{
        expect(msg).to.equal('Message received!')
        return true;
    })
})