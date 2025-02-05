import HomePage from "../../../pageObject/homePage";
import PLPPage from "../../../pageObject/productListingPage";
import SearchPage from "../../../pageObject/searchPage";

describe('Test Suite 01', function(){
    before(function(){
        cy.fixture('example').then((data) =>{
            testData=data;
        })
    })
    beforeEach(function(){
        cy.visit('https://www.pantaloons.com/');
        const homePage = new HomePage();
        const searchPage = new SearchPage();
        const productCategory = data.productCategory;
        homePage.searchPlaceholder().type(productCategory).then(function(){
            cy.wait(3000).then(function(){
                cy.contains('Shirts for Men').should('be.visible').click();
                searchPage.caroselPagination().should('be.visible')
            })
        })
    })
    it('Test Case 01 - verify Cerosel Images section, wwther it is available or not', function(){
        const plpPage = new PLPPage();
        plpPage.caroselSection().should('be.visible');
        plpPage.nextSwipeButton().should('be.visible');
    })
    it('Test Case 02 - Verify Filter and Sort by functionality', function(){
        const plpPage = new PLPPage();
        plpPage.filtrerSection().should('be.visible');
        plpPage.sortBySection().should('be.visible');
    })
    it('Test Case 03 - Verify filter functionality with some Actions', function () {
        const plpPage = new PLPPage();
        plpPage.brandFiltrer();
    
        plpPage.selectedFilterTitle().invoke('text').then((ActualSelectedFilterText) => {
            const ExpectedSelectedFiltrerText = this.data.brandName;
            expect(ActualSelectedFilterText.trim()).to.eq(ExpectedSelectedFiltrerText, 'Filter title should match expected brand name');
        });
    });    
})