import { e2e } from '../../cypress.config';

describe('Canvas: Place items Individually on Canvas', () => {

    beforeEach(() => {
        // cy.visit(e2e.baseUrl)
        // cy.login();
        cy.restoreLocalStorage();
        cy.viewport('macbook-15')
    })

    before(() => {
        cy.visit(e2e.baseUrl)
        cy.saveLocalStorage();
    })

    afterEach(() => {
        cy.saveLocalStorage();

    });

    after(() => {
        
    })

    it('TC1| Place Activity on Canvas via Coordinates, [Smoke-Test]', { scrollBehavior: false }, () => {
        cy.get('.video').should('be.visible')
    })

})


