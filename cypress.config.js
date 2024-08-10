
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "2vcae2",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});