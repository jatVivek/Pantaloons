import BaseFile from "./baseDirectory/baseFile";

class PDPPage{
    constructor() {
        this.baseFile = new BaseFile()
    }
    product(){
        cy.contains(this.baseFile.product())
    }
}
export default PDPPage