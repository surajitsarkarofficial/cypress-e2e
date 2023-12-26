describe('Handle data from fixtures', () => {
    var testData;
    beforeEach(()=>{
        cy.fixture("formdata.json").then((data)=>{
            testData=data;
        })
        cy.fixture("formdata-alias.json").as("formData")
    })
    it('fixtures', () => {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get("input[name='name']").eq(0).clear().type(testData.name);
        cy.get("input[name='email']").clear().type(testData.email);
        cy.get("#exampleInputPassword1").type(testData.password);
        cy.get("#exampleCheck1").check();
        cy.get("#exampleFormControlSelect1").select(testData.gender);
        cy.get("input[name='bday']").clear().type(testData.dob);
        cy.get("input[value='Submit']").click();
        cy.get("div.alert-success").should('include.text',testData["success-msg"])
    });
    it('fixtures using alias', () => {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get("@formData").then((data)=>{
            cy.get("input[name='name']").eq(0).clear().type(data["name"]);
            cy.get("input[name='email']").clear().type(data["email"]);
            cy.get("#exampleInputPassword1").type(data["password"]);
            cy.get("#exampleCheck1").check();
            cy.get("#exampleFormControlSelect1").select(data["gender"]);
            cy.get("input[name='bday']").clear().type(data["dob"]);
            cy.get("input[value='Submit']").click();
            cy.get("div.alert-success").should('include.text',testData["success-msg"])

        })
       
    });
});