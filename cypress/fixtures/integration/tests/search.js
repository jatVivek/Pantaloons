import HomePage from "../../../pageObject/homePage";
import SearchPage from "../../../pageObject/searchPage";

describe('Test Suite 01', function(){
    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data;
        })
    })
    beforeEach(function(){
        cy.visit('https://www.pantaloons.com/');
    })
    it('TestCase 01- Verfy Search Functionility', function(){
        const homePage = new HomePage();
        const searchPage = new SearchPage
        const productCategory = this.data.productCategory;
        homePage.searchPlaceholder().type(productCategory).then(function(){
            cy.wait(3000).then(function(){
                cy.contains('Shirts for Men').should('be.visible').click();
                searchPage.caroselPagination().should('be.visible')
            })
        })
    })
})