import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

if (window.Cypress) {
  window.resetReactQueryCache = () => queryClient.resetQueries();
}

const performSearch = (
  triggerMethod: "click" | "enter",
  inputContent = "budget"
) => {
  cy.get('input[type="search"]').type(inputContent);

  if (triggerMethod === "click") {
    cy.contains("button", "Search").click();
  }

  if (triggerMethod === "enter") {
    cy.get('input[type="search"]').type("{enter}");
  }

  cy.log("Checking for loading state");
  cy.get("[data-test='loading']").should("exist");
  cy.get("[data-test='loading']").should("not.exist");
};

describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("body").should("exist");

    cy.window().then((win) => {
      win.resetReactQueryCache?.();
    });
  });

  it("Scenario: The application shall provide a search form", () => {
    cy.get('[data-test="search-n-list"]').within(() => {
      cy.get('input[type="search"]')
        .should("exist")
        .should("have.attr", "placeholder");

      cy.get("button").contains("Search").should("exist");
    });
  });

  it("Scenario: The search shall be triggerable by clicking the 'Search' button", () => {
    performSearch("click");
    cy.get("[data-test='list-item']").should("exist");
  });

  it("Scenario: The search shall be triggerable by pressing the Enter key", () => {
    performSearch("enter");
    cy.get("[data-test='list-item']").should("exist");
  });

  it("Scenario: A loading state shall be shown while search results are loading", () => {
    cy.log("Tested by previous tests");
  });

  it("Scenario: Search results shall show result title and description", () => {
    performSearch("click");

    cy.get("[data-test='list-item']")
      .get('[data-test="list-item-title"]')
      .should("exist");

    cy.get("[data-test='list-item']")
      .get('[data-test="list-item-description"]')
      .should("exist");
  });

  it("Scenario: Clicking a search result title shall open its URLs in a new tab", () => {
    performSearch("click");

    cy.get("[data-test='list-item-title-link']")
      .first()
      .should("have.attr", "href")
      .and("include", "http")
      .then((href) => {
        expect(href).to.match(/^https?:\/\//);
      });

    cy.get("[data-test='list-item-title-link']")
      .first()
      .should("have.attr", "target", "_blank");
  });

  it("Scenario: Search results shall be marked as their content type", () => {});

  it("Scenario: The user shall be informed if no search results match their query", () => {
    performSearch("click", "the most random thing ever");

    cy.get('[data-test="not-found-state"]').should("exist");
  });
});
