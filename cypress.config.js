const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/',
    specPattern: 'cypress/e2e/**/*.spec.js',
    viewportWidth: 1280,
    viewportHeight: 720,
    chromeWebSecurity: false,
     setupNodeEvents(on, config) {
      return config;
    }
  }
})
