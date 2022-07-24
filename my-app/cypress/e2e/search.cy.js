"use strict";
/// <reference types="cypress" />
describe("search", () => {
    it("search", () => {
        cy.intercept("GET", "http://localhost:5000/posts/?page=1", {
            fixture: "tours1.json",
        });
        cy.visit("/");
        cy.intercept("GET", "http://localhost:5000/posts/search?searchQuery=maldivs&page=1", {
            fixture: "search.json",
        });
        cy.get(".searchbar-md > .search-container").type("maldivs");
        cy.get("input[type=submit]").first().click({ force: true });
        cy.get(".content-container > .header").should("be.visible");
    });
});
