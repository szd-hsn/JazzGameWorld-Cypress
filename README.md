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
