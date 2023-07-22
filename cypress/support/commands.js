// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

const { e2e } = require('../../cypress.config');


Cypress.Commands.add("isVisibleAndPlaceholder", (xpath, text) => {
  cy.get(xpath).should('be.visible').and("have.attr", "placeholder", text);
})

Cypress.Commands.add("isVisibleByAutoIdAndText", (selector, text) => {
  return cy.getByAutoId(selector).should('be.visible').and("have.text", text);
})

Cypress.Commands.add("isVisibleAndText", (xpath, text) => {
  cy.get(xpath).should('be.visible').and("contain", text);
})
Cypress.Commands.add("isVisibleByText", (text) => {
  cy.contains(text).should('be.visible');
})

Cypress.Commands.add("getByClass", (selector, ...args) => {
  return cy.get(`[class*=${selector}]`, ...args);
});

Cypress.Commands.add("getByAutoId", (selector, ...args) => {
  return cy.get(`[auto-id=${selector}]`, ...args);
})
