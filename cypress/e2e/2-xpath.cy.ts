describe('xpath examples',()=>{
    it('test case with xpath',()=>{
        cy.visit("https://automationtesting.co.uk/")
        cy.xpath("//*[@class='toggle']").click();
        cy.xpath("//*[@id='menu']//ul/li/a[text()='Actions']").click();
        cy.xpath("//h2[@id='content']").should('have.text',"Actions");
    })
})