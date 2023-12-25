describe('Extract token and inject it to local storage', () => {
    it('By pass login screen', () => {
        cy.request({
            url:"https://rahulshettyacademy.com/api/ecom/auth/login",
            method:"POST",
            body:{
                userEmail: "surajitsarkarofficial@gmail.com", 
                userPassword: "Suro@1234"
            }
        }).then((response)=>{
            expect(response.status).to.eq(200);
            //Extract the token from the response and store it in env variable named token.
            Cypress.env("token",response.body.token);
            cy.log("token is "+ response.body.token)
        })
        cy.visit("https://rahulshettyacademy.com/client/",
        {
            //before the url is load, set the token in the session storage
            onBeforeLoad : (window)=>{
                window.localStorage.setItem("token",Cypress.env("token"))
            }
        })
        cy.get("button .fa-sign-out").should('be.visible')
        cy.wait(2000)
        cy.get("button .fa-sign-out").click()
        cy.get("#login").should('be.visible')

    });
});