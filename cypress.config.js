import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    supportFile: false,
    specPattern: "tests/cypress/e2e/**/*.{cy.ts,cy.tsx}",
    setupNodeEvents: (on, config) => {},
    baseUrl: "http://localhost:3000",
  },
});
