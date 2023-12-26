import neatCsv = require("neat-csv");

describe('Custom commands',     () => {
    it('Create Login Custom Command', () => {
        let productName;
        cy.loginToEcom("surajitsarkarofficial@gmail.com","Suro@1234");
        cy.visit("https://rahulshettyacademy.com/client/",
        {
            //before the url is load, set the token in the session storage
            onBeforeLoad : (window)=>{
                window.localStorage.setItem("token",Cypress.env("token"))
            }
        })
        cy.get("button .fa-sign-out").should('be.visible')
        cy.get("#products div.row>div[class*='ng-star-inserted'] .card-body b").eq(2).then((prod)=>{
            productName=prod.text();
        })
        cy.get("#products div.row>div[class*='ng-star-inserted'] button i[class*='shopping-cart']").eq(2).click();
        cy.get("button[routerlink*='cart']").click();
        cy.contains("My Cart").should('be.visible')
        cy.get("button").contains("Checkout").click();
        cy.contains("Payment Method").should('be.visible')
        cy.get("input[placeholder='Select Country']").type("India")
        cy.get("button[class*='ng-star-inserted'] span").each((opt)=>{
            if(opt.text().trim()==="India")
            {
                cy.wrap(opt).click();
                return
            }
        })
        cy.contains("Place Order").click();
        cy.contains(" Thankyou for the order.").should('be.visible')
        cy.contains("Click To Download Order Details in CSV").click();

        //get current directory and then in the download folder the file will be present.
        cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_surajitsarkarofficial.csv")
        .then( (content)=>{
                neatCsv(content).then((data)=>{
                    expect(data[0]["Product Name"]).to.be.equal(productName);
                })
        })
       

        
    });

});