const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: { 
    URL: 'TEST_URL',
},
  e2e: {
    env: { 
    URL: 'TEST_URL',
},
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
