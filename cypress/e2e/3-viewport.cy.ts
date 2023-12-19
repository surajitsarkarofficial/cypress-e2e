describe('Viewport examples', ()=>{
    it('predefined viewport',()=>{
        cy.viewport('iphone-xr')
        cy.visit("https://automationtesting.co.uk/");
        cy.wait(3);

    })
    it('custom viewport',()=>{
        cy.viewport(2560,1080)
        cy.visit("https://automationtesting.co.uk/");
        cy.wait(3);

    })
    it('predefined viewport with orientation',()=>{
        cy.viewport('iphone-xr',"landscape")
        cy.visit("https://automationtesting.co.uk/");
        cy.wait(3);

    })
})