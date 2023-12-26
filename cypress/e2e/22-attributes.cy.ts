describe('Handle element attributes', () => {
    var testData;
    beforeEach(()=>{
        cy.fixture("formdata.json").then((data)=>{
            testData=data;
        })
        cy.fixture("formdata-alias.json").as("formData")
    })
    it('handle attributes', () => {
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        cy.get("input[name='name']").eq(0).should('have.attr',"minlength","2")
        cy.get("#inlineRadio3").should('have.attr','disabled')
    });
    it('fetch attributes option2', () => {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get("@formData").then((data)=>{
            cy.get("input[name='name']").eq(0).then(($ele)=>{
               expect($ele.attr("minlength")).to.equal("2")
            })
            cy.get("#inlineRadio3").then(($ele)=>{
                expect($ele).to.have.attr("disabled")
            })
        })
       
    });
});