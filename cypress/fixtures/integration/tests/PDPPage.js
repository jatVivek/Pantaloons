import HomePage from "../../../pageObject/homePage";
import PLPPage from "../../../pageObject/productListingPage";
import BaseFile from "../../../pageObject/baseDirectory/baseFile";
import PDPPage from "../../../pageObject/productDescriptionPage";

describe('Test Suite 01', function() {
    const homePage = new HomePage();
    const plpPage = new PLPPage();
    const pdpPage = new PDPPage();
    const baseFile = new BaseFile();

    beforeEach(function() {
        baseFile.url();
    });

    it('Test Case 01 - should search for a product and press enter', function() {
        // Click on the search placeholder, type the search product, and press enter.
        homePage.searchPlaceholder()
            .click()
            .type(`${baseFile.searchProduct1()}{enter}`)
            pdpPage.product().should('be.visible').click();
    });
});
