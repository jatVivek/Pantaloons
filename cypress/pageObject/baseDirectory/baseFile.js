class BaseFile{
    url(){
        return cy.visit('https://www.pantaloons.com/')
    }
    searchProduct1(){
        return "white shirt";
    }
    product(){
        return "White Printed Formal Full Sleeves Shirt Collar Men Slim Fit Formal Shirts "
    }
}
export default BaseFile