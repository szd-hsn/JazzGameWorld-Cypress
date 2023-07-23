export const utils = {

    verifyLeftNavigationMenu(expectedTabTextArray) {
        cy.get('ul#menu').within(() => {
            cy.get('li').each(($li, index) => { 
                const liText = $li.text().trim(); 
                if ($li.find('a span').length > 0) { 
                    const spanText = $li.find('a span').text().trim();
                    expect(liText).to.equal(spanText);  
                }
                expect(liText).to.equal(expectedTabTextArray[index]);

            });
        });
    },

    verifyFooterNavigation (expectedTabTextArray) {
    cy.get('.footer_top_nav ul li a').each(($link, index) => {
      const linkText = $link.text().trim();
      const expectedText = expectedTabTextArray[index];
        expect(linkText).to.equal(expectedText);
    });
  },

    verifyChangeUrlTabs(optionTexts, expected){
        cy.get('#updateTabURL').each(($option) => {
            cy.wrap($option).invoke('text').then((text) => {
                const matchedText = optionTexts.find((expectedText) => text.includes(expectedText));
                expect(matchedText).to.exist;
                if (matchedText === expected) {
                    cy.wrap($option).should('have.class', 'active');
                } else {
                    cy.wrap($option).should('not.have.class', 'active');
                }
            });
        });
    }
    
}
