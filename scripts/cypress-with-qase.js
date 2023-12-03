require('dotenv').config();
const prompt = require('prompt');
const cypress = require('cypress');

prompt.start();
prompt.get(
[ 
    {
             name: 'PROJECT_ID',
             description: 'Provide Qase PROJECT_ID',
                          type: 'string',
                        required: true,
 },
 {
             name: 'RUN_ID',
             description: 'Provide RUN_ID for the Qase test run',
             type: 'number',
             required: true,
 },
 {
             name: 'SUITE',
             description: 'Provide SUITE folder path for the Qase test run',
             type: 'string',
             required: true,
 },
 ],
 function (err, result) {
         cypress.run({
             spec: `cypress/e2e/${result.SUITE}/*.cy.js`,
             browser: 'chrome',
            reporter: 'cypress-qase-reporter',
    headed: true,
    reporterOptions: {
        apiToken: process.env.QASE_API_KEY,
        projectCode: result.PROJECT_ID,
        runId: result.RUN_ID,
        logging: true,
}, 
});
});