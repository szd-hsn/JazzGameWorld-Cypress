1. npm init -y
2. npm install -D cypress@10.3.0 
3. Command: 
a) To open test runner
./node_modules/.bin/cypress open
OR
npx cypress open
b) Run all test in headless mode
./node_modules/.bin/cypress run
npx cypress run

c) To run specific test
./node_modules/.bin/cypress run -spec "cypress/e2e/test.cy.js" 
Or
npx cypress run --browser chrome --spec "cypress/e2e/canvasCpmNetwork.cy.js"  -- --max-old-space-size=8092

d) To run All tests from withih a specific test folder
./node_modules/.bin/cypress run -spec cypress/e2e/sampleTesta/.*cy.js

e) To run All test on chrome
./node_modules/.bin/cypress run --browser chrome

f) To run multiple spec files in headless mode on a specific browser

npx cypress run --browser chrome --spec "cypress/e2e/createProject.cy.js,cypress/e2e/canvas.cy.js,cypress/e2e/resources.cy.js,cypress/e2e/tableDataVerification.cy.js,cypress/e2e/outputLaborEquipmentVerification.cy.js,cypress/e2e/changeCalendarInTable.cy.js,cypress/e2e/contextualMenu.cy.js,cypress/e2e/canvasCpmNetwork.cy.js"

4. Report (Mochawesome):
- Install cypress-mochawesome-reporter -> https://www.npmjs.com/package/cypress-mochawesome-reporter -> npm i --save-dev cypress-mochawesome-reporter

5. Test case Grouping:Cypress-Grep
- npm i -D cypress-grep -> https://github.com/cypress-io/cypress-grep
- Run test cases with special tags: npx cypress run --env grepTags="regression" 
- Run test cases having a special text: npx cypress run --env grep="test" 
- Run test cases from a single specs: npx cypress run --spec cypress/e2e/Login.cy.js  --env grep="test"
- Not working, already raised it in github - > https://github.com/cypress-io/cypress-grep/issues/134
- If grep installation faild -> https://exerror.com/eresolve-unable-to-resolve-dependency-tree-error-when-installing-npm-packages/

6. a. Settings for running spec with differnet User
Package.Json > Script command: 
"cy:run:chrome": "cypress run --headed --browser chrome --spec \"cypress/e2e/monkeyScript.cy.js\"",

b. Terminal Command
npm run cy:run:chrome -- --env dataset=Data3 

c. To open Runner for running spec with differnet User
npx cypress open --env dataset=Data2  

b. 2 env variable, 
npm run cy:run:chrome -- --env dataset=devBlueUser3,tout=5000

c) Command to trigger Monkey user in headed mode: 
npm run cy:run:chrome -- --env dataset=devBlueUser1,tout=30000

d) Command to trigger Monkey user in headless mode: 
npm run cy:run:chrome:headless -- --env dataset=devBlueUser1,tout=180000

e) Monkey User script - headless mode:
npm run cy:run:chrome:headless -- --env dataset=devBlueUser3,tout=5,organizationID=6358e202d76dc6fabfbf3151,workspaceID=6358e202d76dc6fabfbf3153,projectID=6358e327b3e04b4f3b11135b,wait=100
