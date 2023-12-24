import { method } from "cypress/types/bluebird";

describe('Undestand various wasy to intercept a request and response', () => {
    it('Intercept a response', () => {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo");

        //Intercept data 
        cy.intercept(
            //Request 
        {
            method:"GET",
            url:"https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        },
        //response which we have mocked so that whatever response it is, we get only the below response
        {
            body:[{
                "book_name": "Explore Cypress with Suro",
                "isbn": "SURO",
                "aisle": "2407"
            }]
        }
        ).as("mockResponse");
        //This click will trigger the call to the api we are intercepting
        cy.get("button[routerlink='/library']").click();

        //We will wait for the promise returned by the intercept object to be resolved
        cy.wait("@mockResponse")

        //Now lets verify in the UI that we are getting the response we mocked and not the actual response.
        cy.get('p').should('include.text',"only 1 Book available")
        let data:any[]=[1,"SURO","2407","Explore Cypress with Suro"];
        cy.get("table tbody>tr>*").each(($cell,index)=>{
            cy.log(index.toString())
            cy.get(`table tbody>tr>*:nth-child(${index+1})`).should('have.text',data[index]);
        })


        
    });
    it('Intercept a request', () => {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo");

        //Intercept data 
        cy.intercept("GET","https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",(req)=>{
            //modifying the url with our custom url, where we changed the Authorname
            req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra";

            //Now we are saying to continue with the request
            req.continue((res)=>{
                //In this block we can validate the response object if we wish to
            });
        }).as("mockResponse");
        //This click will trigger the call to the api we are intercepting
        cy.get("button[routerlink='/library']").click();

        //We will wait for the promise returned by the intercept object to be resolved
        cy.wait("@mockResponse")

        //Now lets verify in the UI that we are getting the response we mocked and not the actual response.
        cy.get("table tbody>tr").should('have.length.above',0);
       


        
    });
    it('Use Intercept to valid FE and BE', () => {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo");

        //Intercept data 
        cy.intercept(
            //Intercepting the Request and not mocking any thing as we want to get the actual response from BE and valid in FE
        {
            method:"GET",
            url:"https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        }
        ).as("beFeIntegeration");
        //This click will trigger the call to the api we are intercepting
        cy.get("button[routerlink='/library']").click();

        //We will wait for the promise returned by the intercept object to be resolved
        cy.wait("@beFeIntegeration")

        //Now lets verify in the UI that we are getting the actual response
       cy.get("table tbody>tr").should('have.length.above',1)


        
    });
});