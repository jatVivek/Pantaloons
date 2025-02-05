import HomePage from "../../../pageObject/homePage";

describe('Test Suite 01', () => {
    beforeEach(function() {
        cy.visit('https://www.pantaloons.com/');
    });

    it('Test Case 01 - Verify that the homepage loads successfully', function() {
        const homePage = new HomePage(); 
        homePage.brandLogo('.pantaloons-logo').should('be.visible'); 
        homePage.womenMenuWrapper().should('be.visible');
        homePage.MenMenuWrapper().should('be.visible');
        homePage.kidsMenuWrapper().should('be.visible');
    });
    it('TestCase02 - Verify the Menu Bar visibility', function(){
        const homePage = new HomePage(); 
        homePage.womenMenuWrapper().trigger('mouseover').then(()=>{
            cy.wait(2000)
            cy.log('Verifying Women Sub Menu Content');
            homePage.womenSubMenuWrapper().should('be.visible');
            homePage.womenSubMenuWrapperEthenicWear().should('be.visible');
            homePage.womenSubcategoryWrapperSportsAndActiveWear().should('be.visible');
            homePage.womenSubcategoryWrapperNightwearandLeingirie().should('be.visible');
        })
        homePage.womenMenuWrapper().trigger('mouseout');
        homePage.kidsMenuWrapper().trigger('mouseover').then(()=>{
            cy.log('Verifying kids Sub Menu Content')
            homePage.kidsSubMenuBABYBOTTOMWEAR().should('be.visible');
            homePage.kidsSubMenuBOYSTOPWEAR().should('be.visible');
            homePage.kidsSubMenuGIRLSBOTTOMWEAR().should('be.visible');
            homePage.kidsSubMenuGIRLSTOPWEAR().should('be.visible');
        })
    })
    
    
});
