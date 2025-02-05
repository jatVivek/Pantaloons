class HomePage {
    brandLogo(element) {
        return cy.get(element);
    }
    womenMenuWrapper(){
        return cy.get('[href="/shop/women-store"] > span')
    }
    womenSubMenuWrapper(){
        return cy.contains('WESTERNWEAR');
    }
    womenSubMenuWrapperEthenicWear(){
        return cy.contains('ETHNICWEAR');
    }
    womenSubcategoryWrapperSportsAndActiveWear(){
        return cy.contains('SPORTS & ACTIVEWEAR');
    }
    womenSubcategoryWrapperNightwearandLeingirie(){
        return cy.contains('SLEEPWEAR & LINGERIE')
    }
    MenMenuWrapper(){
        return cy.get('[href="/shop/men-store"] > span');
    }
    kidsMenuWrapper(){
        return cy.get('[href="/shop/kids-store"]');
    }
    kidsSubMenuBOYSTOPWEAR(){
        return cy.contains('BOYS TOPWEAR');
    }
    kidsSubMenuBABYBOTTOMWEAR(){
        return cy.contains('BABY BOTTOMWEAR');
    }
    kidsSubMenuGIRLSBOTTOMWEAR(){
        return cy.contains('GIRLS BOTTOMWEAR');
    }
    kidsSubMenuGIRLSTOPWEAR(){
        return cy.contains('GIRLS TOPWEAR');
    }
    searchIcon(){
        return cy.get("div[aria-label='search Icon']");
    }
    searchPlaceholder(){
        return cy.get("input[placeholder='Search']");
    }
}
export default HomePage;
