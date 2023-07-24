**Framework Overview:**

This repository contains an automation testing framework implemented using Cypress, a popular open-source end-to-end testing tool. The framework aims to streamline the testing process, provide easy test script maintenance, and ensure robust test coverage for the web application under test (https://jazzgameworld.com.pk/home).

**Framework Features:**

**Page Object Model (POM):** The framework follows the Page Object Model design pattern, ensuring a clear separation between page elements and test scripts. This approach enhances code reusability and maintainability.

**Custom Commands:** Custom Cypress commands have been implemented to handle common test actions, making test scripts more concise and readable.

**Test Data Management:** The framework incorporates efficient data handling techniques, such as fixtures or external JSON files, to manage test data and enable data-driven testing.

**Test Configuration:** A configuration file allows easy setup of various testing parameters, such as test environment URLs, browser options, and timeouts.

**Reporting and Logging:** Detailed Mocha Awesome reports provide comprehensive insights into test results, including pass/fail status and execution time. Additionally, Cypress logs capture valuable debug information during test execution.




**Getting Started:**

**Prerequisites:** Make sure you have Node.js and npm installed on your machine.

**Installation:** Clone the repository and install the required dependencies by running:

cd [repository folder]

git clone https://github.com/szd-hsn/JazzGameWorld-Cypress.git

npm install

**Running Tests:** Execute the Cypress tests using the following command:

npx cypress open
    OR
npx cypress run     (to run the test on the terminal)




**Test Execution:**

**Local Execution:** The framework is designed to execute tests on your local machine using Google Chrome. Ensure the application URL is correctly configured in the cypress.json file.

**CI/CD Integration:** The repository includes CI/CD pipelines configured to trigger test execution on every push to the main branch. Test reports and videos are generated and stored as GitHub artifacts.








