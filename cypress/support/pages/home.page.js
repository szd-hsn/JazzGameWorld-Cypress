import { e2e } from "../../../cypress.config";

class HomePage {
    visit() {
        cy.visit(e2e.baseUrl);
    }

    getMainLogo() {
        return cy.get('.brand-logo')
    }

    getVideo() {
        return cy.get('.video');
    }

    getSpinWheelButton() {
        return cy.get('.spin_links');
    }

    verifyURL() {
        return cy.url()
      }

    getPlayStoreButton() {
        return cy.get('.playstore_links').invoke('removeAttr', 'target');
    }

    getRecommmendedStreamHeading() {
        return cy.get('.section_titles')
    }

    verifyRecommmendedVideosAndLinks() {
        cy.checkImagesAndLinks('.row')
    }

    verifyLiveStreamVideosAndLinks() {
        cy.checkBrokenImagesAndLinksInDiv('.row')
    }

    getFooterLogo() {
        return cy.get('.footer_logo').last()
    }

    verifyNavItemIsActive() {
        cy.get('.nav-item').contains('Top').should('have.class', 'active');
    }

    clickOnTheLeftMenuTab(tabName){
        cy.get('#menu').find('li').contains(tabName).scrollIntoView().click()
    }

}

export default HomePage;
