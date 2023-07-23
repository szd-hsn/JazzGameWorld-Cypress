// cypress/support/page_objects/PlayStorePage.js
class PlayStorePage {
    verifyUrl() {
      cy.url().should('include', 'https://play.google.com/store/apps/details?id=com.jazz.game.world');
    }
  }
  
  export default new PlayStorePage();
  