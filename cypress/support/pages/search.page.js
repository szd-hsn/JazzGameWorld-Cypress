
class SearchPage {

    getSearchForm() {
        return cy.get('#searchForm');
    }

    getSearchInput() {
        return this.getSearchForm().find('input');
    }

    getSearchResultsTitle() {
        cy.get('h5').contains('Search').should('be.visible');
    }

    getSearchResultsSubtitle() {
        return cy.get('h6');
    }

}

export default SearchPage;
