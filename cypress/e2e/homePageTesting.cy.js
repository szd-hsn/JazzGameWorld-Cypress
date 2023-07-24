import { home } from 'ospath';
import { e2e } from '../../cypress.config';
import HomePage from '../support/pages/home.page';
import { utils } from '../support/pages/utils.page';

describe('HomePage Test Suite', () => {

    const homepage = new HomePage();

    beforeEach(() => {
    })

    before(() => {
        cy.clearLocalStorage();                             // Clear local storage 
        cy.clearCookies();                                  // Clear Cookies  
        homepage.visit()                                    // Visit baseUrl
    })

    afterEach(() => {
    });

    after(() => {
        cy.clearLocalStorage();                             // Clear local storage 
        cy.clearCookies();                                  // Clear Cookies
    })

    it('TC 1 | Verifies the presence of essential elements', () => {

        homepage.getMainLogo().should('be.visible')         // Website Logo should be visible
        homepage.getVideo().should('be.visible')            // Main video should be visible
        homepage.getSearchForm().should('be.visible')       // Search bar should be visible
        homepage.getSpinWheelButton().should('be.visible')  // Spin Wheel button should be visible
        cy.fixture('testData').then((data) => {
            utils.verifyLeftNavigationMenu(data.leftNavMenuTabsNames)  // Verfication of the left Menu Tab
            cy.wait(e2e.pageLoadTimeMedium)
            homepage.getRecommmendedStreamHeading()                    //verify Recommended Heading
                .contains(data.recommendedStreamsHeadingText)
                .scrollIntoView()
            homepage.verifyRecommmendedVideosAndLinks()      // Custom Command to verify video thumbnail and links
            utils.verifyFooterNavigation(data.footerNavMenuTabsName)   // Verfication of the Top Footer Menu Tab
        })

        homepage.getFooterLogo().should('be.visible')        // Footer logo should br visibel

    })

    it('TC 2 | Verify the search bar functionality', () => {

        cy.fixture('testData').then((data) => {
            homepage.getSearchInput().scrollIntoView().type(`${data.searchTitle}{enter}`)                      // Search "PUBG" in the search box
            homepage.getSearchResultsTitle()                                                  // verify the main search title
            homepage.getSearchResultsSubtitle(`Showing results for :: ${data.searchTitle}`)   // verify the sub search title
            homepage.verifyNavItemIsActive()                                                  // verify active tab
            homepage.getMainLogo().click()                                                      // naviagte to home page
        })

    })

    it('TC 3 | Verify the SpinWheelButton functionality', () => {

        homepage.getSpinWheelButton().click()                   // click on the Spin Wheel button
        homepage.verifyURL().should('include', 'spinWheel');    // verify the URl
        cy.go('back');                                          // Naviagte back 

    })

    it('TC 4 | Verify the Playstore button functionality', () => {

        homepage.getPlayStoreButton().click()                   // click on the play store button
        homepage.verifyURL()                                    // verify the URl
            .should('include', 'https://play.google.com/store/apps/details?id=com.jazz.game.world');
        cy.go('back');                                          // Naviagte back 

    })

    it('TC 5 | Verify the  "Live Streams" left navigation menu items', () => {

        cy.fixture('testData').then((data) => {
            // Live Streams
            homepage.clickOnTheLeftMenuTab(data.leftNavMenuTabsNames[0])
            homepage.verifyURL().should('include', 'streamsLive');
            utils.verifyChangeUrlTabs(data.changeUrlTabsName, data.changeUrlTabsName[3]);
            // homepage.verifyLiveStreamVideosAndLinks();
            cy.wait(e2e.pageLoadTimeMedium)
            homepage.getMainLogo().scrollIntoView().click()
            homepage.verifyURL().should('include', e2e.baseUrl)
        })
    })

    it.skip('TC 6 | Verify the "Recently Watched" left navigation menu items', () => {   // skipping this testcase beacuse 'phonePage?' is not loading on cloud

        cy.fixture('testData').then((data) => {
            // Recent Watch
            homepage.clickOnTheLeftMenuTab(data.leftNavMenuTabsNames[1])
            homepage.verifyURL().should('include', 'https://jazzgameworld.com.pk/phonePage?');
            cy.go('back');                                          // Naviagte back 
            cy.wait(e2e.pageLoadTimeMedium)
            homepage.getMainLogo().scrollIntoView().click()
            homepage.verifyURL().should('include', e2e.baseUrl)
        })
    })

    it('TC 7 | Verify the "Browse" left navigation menu items', () => {

        cy.fixture('testData').then((data) => {
            // Browse
            homepage.clickOnTheLeftMenuTab(data.leftNavMenuTabsNames[2])
            homepage.verifyURL().should('include', 'browse');
            // homepage.verifyLiveStreamVideosAndLinks();
            cy.wait(e2e.pageLoadTimeMedium)
            homepage.getMainLogo().scrollIntoView().click()
            homepage.verifyURL().should('include', e2e.baseUrl)
        })
    })

    it.skip('TC 8 | Verify the "Follwoing" left navigation menu items', () => {          // skipping this testcase beacuse 'phonePage?' is not loading on cloud


        cy.fixture('testData').then((data) => {
            // Follwoing
            homepage.clickOnTheLeftMenuTab(data.leftNavMenuTabsNames[3])
            homepage.verifyURL().should('include', 'https://jazzgameworld.com.pk/phonePage?');
            cy.go('back');                                          // Naviagte back 
            cy.wait(e2e.pageLoadTimeMedium)
            homepage.getMainLogo().scrollIntoView().click()
            homepage.verifyURL().should('include', e2e.baseUrl)
        })
    })

    it('TC 9 | Verify the "Web Games" left navigation menu items', () => {

        cy.fixture('testData').then((data) => {
            // Web Games
            homepage.clickOnTheLeftMenuTab(data.leftNavMenuTabsNames[5])
            homepage.verifyURL().should('include', 'gamesWeb');
            utils.verifyChangeUrlTabs(data.changeUrlTabsName, data.changeUrlTabsName[2]);
            // homepage.verifyLiveStreamVideosAndLinks();
            cy.wait(e2e.pageLoadTimeMedium)
            homepage.getMainLogo().scrollIntoView().click()
            homepage.verifyURL().should('include', e2e.baseUrl)
        })
    })

    it('TC 10 | Verify the "Web Games" left navigation menu items', () => {

        cy.fixture('testData').then((data) => {
            // Mobile Games
            homepage.clickOnTheLeftMenuTab(data.leftNavMenuTabsNames[7])
            homepage.verifyURL().should('include', 'gamesMobile');
            utils.verifyChangeUrlTabs(data.changeUrlTabsName, data.changeUrlTabsName[1]);
            // homepage.verifyLiveStreamVideosAndLinks();
            cy.wait(e2e.pageLoadTimeMedium)
            homepage.getMainLogo().scrollIntoView().click()
            homepage.verifyURL().should('include', e2e.baseUrl)
        })
    })

    it('TC 11 | Verify the "Multiplayer Games" left navigation menu items', () => {

        cy.fixture('testData').then((data) => {
            // Multiplayer Games
            homepage.clickOnTheLeftMenuTab(data.leftNavMenuTabsNames[8])
            homepage.verifyURL().should('include', 'gamesMultiplayer');
            // homepage.verifyLiveStreamVideosAndLinks();
            cy.wait(e2e.pageLoadTimeMedium)
            homepage.getMainLogo().scrollIntoView().click()
            homepage.verifyURL().should('include', e2e.baseUrl)
        })
    })

    it('TC 12 | Verify navigating back to the home page', () => {
        cy.wait(e2e.pageLoadTimeMedium)
        homepage.getMainLogo().scrollIntoView().click()
        homepage.verifyURL().should('include', e2e.baseUrl)
        cy.wait(e2e.pageLoadTimeMedium)
        homepage.getFooterLogo().scrollIntoView().click()
        homepage.verifyURL().should('include', e2e.baseUrl)

    })

})


