describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("body").should("exist");
  });

  it("Scenario: The application shall provide a search form", () => {});

  it("Scenario: The search shall be triggerable by clicking the 'Search' button", () => {});

  it("Scenario: The search shall be triggerable by pressing the Enter key", () => {});

  it("Scenario: A loading state shall be shown while search results are loading", () => {});

  it("Scenario: Search results shall show result title and description", () => {});

  it("Scenario: Clicking a search result title shall open its URLs in a new tab", () => {});

  it("Scenario: Search results shall be marked as their content type", () => {});

  it("Scenario: The user shall be informed if no search results match their query", () => {});
});
