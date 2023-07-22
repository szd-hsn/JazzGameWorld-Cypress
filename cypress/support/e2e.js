// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';
import "cypress-localstorage-commands";
import "cypress-real-events/support";
require('cypress-grep')()
beforeEach(() => {
  // cy.viewport(3072, 1920)
  cy.viewport('macbook-15')
})
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
// Alternatively you can use CommonJS syntax:
// require('./commands')