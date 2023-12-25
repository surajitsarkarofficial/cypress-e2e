import neatCsv = require("neat-csv");


describe('Handle Excel',     () => {
    it('Handle Excel file', () => {
        let productName;
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
        cy.contains("Click To Download Order Details in Excel").click();
        const filePath=Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_surajitsarkarofficial.xlsx"
        cy.log(filePath)
        cy.task("excelToJsonConverter",filePath).then((result)=>{
            cy.log(JSON.stringify(result))
            //["data"] -> sheet name
            //[1] --> row
            //[B] --> Column name
            cy.log(result["data"][1]["B"])
            expect(result["data"][1].B).to.be.equal(productName);
        })
       

        
    });

});

