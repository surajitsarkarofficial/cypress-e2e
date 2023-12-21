describe('Handle IFrames', () => {
    it('iFrame', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.get('#mce_0_ifr').then(($frame)=>{
            const body = $frame.contents().find('body')
            cy.wrap(body).find('p').clear()
            cy.wrap(body).type("Typing from Cypress")
        })
    });
    it('More iFrame', () => {
        cy.visit("https://automationtesting.co.uk/iframes.html")
        cy.get('iframe').then(($frame)=>{
            const innerFrame = $frame.contents().find('body')
            cy.wrap(innerFrame).find('.toggle').click()
            cy.wrap(innerFrame).find('#menu li>a').each((menu)=>{
                if(menu.text()==='Actions')
                {
                    cy.wrap(menu).click();
                   
                }
                cy.wrap(innerFrame).contains("Actions").should('be.visible')
            })
        })
    });

    it('handle iframe using plugin',()=>{
        cy.visit("https://automationtesting.co.uk/iframes.html")
        cy.frameLoaded("iframe[src='index.html']")
        cy.iframe("iframe[src='index.html']").find('#banner h1').should('have.text',"Testing Arena");
    })
});