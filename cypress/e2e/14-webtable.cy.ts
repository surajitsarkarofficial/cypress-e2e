describe('Handle Web Table', () => {
    it('webtable', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //Fetch the Advanced Selenium Framework course fee and verify if its 20

        cy.get("#product tr td:nth-child(2)").each(($course,index)=>{
            if($course.text().includes('Advanced Selenium Framework'))
            {
                cy.log($course.text())
                cy.get("#product tr td:nth-child(2)").eq(index).next().then((price)=>{
                    expect(price.text()).to.eq("20")
                })
            }
        })
    });
    
});