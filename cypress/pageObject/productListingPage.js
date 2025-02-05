class PLPPage {
    caroselSection() {
        return cy.get("#breadcrumb div[class='swiper-wrapper']");
    }

    nextSwipeButton() {
        return cy.get(
            "body.SearchPage:nth-child(2) main.SearchPage.application-wrapper.false:nth-child(5) div.MuiContainer-root.MuiContainer-maxWidthLg.css-1qsxih2:nth-child(2) div.PlpWeb_plp-wrapper__Nh3hz div.MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-12.MuiGrid-grid-lg-12.PlpWeb_plp-promotion-banner-top-container__qUId5.css-9zuxvs:nth-child(1) section.Banner_promotional-banner__Cc_70:nth-child(2) div.Banner_app-banner-block__39_09.promo-plp-banner div:nth-child(1) div.swiper-container.swiper-container-initialized.swiper-container-horizontal.swiper-container-pointer-events.Banner_hero-banner-slider__NusBT > div.swiper-button-next"
        );
    }

    filtrerSection() {
        return cy.get(".PlpWeb_filter-wrapper__v6IP1");
    }

    sortBySection() {
        return cy.get(".PlpWeb_sortBy-section__IatPT"); // Fixed missing `.`
    }

    brandFiltrer() {
        cy.fixture("example").then((data) => {
            // Ensure fixture data is loaded before proceeding
            cy.get(
                "div.MuiAccordionSummary-content.Mui-expanded.MuiAccordionSummary-contentGutters.css-17o5nyn p.MuiTypography-root.MuiTypography-body1.PlpWeb_accordion-summary-text__2e3X5.css-9l3uo3"
            ).then(() => {
                cy.get("div.MuiAccordionDetails-root.PlpWeb_filter-action-content__sQwvH.css-u7qq7e")
                    .each(($e1, index) => {
                        const brandName = $e1.text().trim();
                        if (brandName.includes(data.brandName)) {
                            cy.get("div.MuiAccordionDetails-root.PlpWeb_filter-action-content__sQwvH.css-u7qq7e")
                                .eq(index)
                                .next()
                                .click();
                        }
                    });
            });
        });
    }
    selectedFilterTitle(){
        return cy.get("li[class='PlpWeb_filter-selected__gbWZs'] span[title='Ajile']")
    }
}

export default PLPPage;
