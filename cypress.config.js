const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'sd2ynm',
  e2e: {
    baseUrl: 'https://tapsshop.pl/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
