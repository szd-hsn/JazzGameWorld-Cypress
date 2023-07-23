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

Cypress.Commands.add('checkImagesAndLinks', (containerSelector) => {

  cy.get(containerSelector).first().find('img').each(($img) => {        // Iterate through each image in the container
    const src = $img.attr('src');
    cy.request(src).then((response) => {                                // Check if the image has a valid source
      expect(response.status).to.eq(200);                               // 200 indicates the image loaded successfully
    });
  });
  cy.get(containerSelector).first().find('a').each(($link) => {         // Get all links within the specific class container
    const href = $link.attr('href');
    if (href) {                                                         // Check if the link has a valid href
      cy.request(href).then((response) => {
        expect(response.status).to.not.eq(404);                         // 404 indicates a broken link
      });
    }
  });
});

Cypress.Commands.add('checkBrokenImagesAndLinksInDiv', (divSelector) => {
  cy.get(divSelector).within(() => {
    cy.get('img').each(($img) => {                                        // Check images
      const src = $img.attr('src');

      cy.request(src).then((response) => {
        expect(response.status).to.eq(200);                                // 200 indicates the image loaded successfully
      });
    });

    // Check links
    cy.get('a').each(($link) => {
      const href = $link.attr('href');

      if (href) {
        cy.request(href).then((response) => {
          expect(response.status).to.not.eq(404);                          // 404 indicates a broken link
        });
      }
    });
  });
});

