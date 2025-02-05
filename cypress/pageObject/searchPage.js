class SearchPage{
    caroselPagination(){
        return cy.get("div[class='swiper-pagination swiper-pagination-clickable swiper-pagination-bullets']");
    }
}
export default SearchPage