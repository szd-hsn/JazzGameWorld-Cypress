module.exports = {
  reporter: "mochawesome",
  reporterOptions: {
    charts: true,
    overwrite: false,
    html: true,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    reportDir: "cypress/report",
    reportFilename: "report",
  },
  watchForFileChanges: true,
  reporter: 'cypress-mochawesome-reporter',
  "chromeWebSecurity": false,
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
  "numTestsKeptInMemory": 1,
  "pageLoadTimeout": 40000,
  "waitForNavigation": true,
  "isElectron": true,
  e2e: {
    defaultCommandTimeout: 100000,
    requestTimeout: 50000,
    baseUrl: 'https://jazzgameworld.com.pk/home',
    baseUrlDevBlue: 'https://dev-blue.d3gt8rndv0q3ao.amplifyapp.com',
    baseUrlCollabStaging: 'https://collab.app.planera.io',
    pageLoadTimeSmall: 2000,
    pageLoadTimeMedium: 7000,
    "env": {
      "TZ": "America/New_York"
    },
    // "blockHosts": [
    //   "rum.browser-intake-datadoghq.com"
    // ],
    // maxTimeout: 20000,
    // specPattern: "**/*.{feature,features}",
    // setupNodeEvents(on, config) {
    //   require('cypress-terminal-report/src/installLogsPrinter')(on);
    // },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      require("cypress-localstorage-commands/plugin")(on, config);
      config.browsers.push({
        name: 'brave',
        channel: 'stable',
        family: 'chromium',
        displayName: 'Brave',
        version: '99.1.36.116',
        path: '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
        majorVersion: 99
    });
      return config;
    },
  },
};
