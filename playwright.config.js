// playwright.config.js
// @ts-check
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  projects: [
    {
      name: 'api',
      testMatch: '**/*_api.spec.js',
      use: {
        baseURL: 'https://api.trello.com/1'
      }
    }      
  ]
};
module.exports = config;