import { goDown, goUp, hasFocus } from "../fixtures/helpers"

context("Categories Page", () => {
  before(() => {
    cy.visit("/categories")
  })

  it("Changes focused button", () => {
    hasFocus("Characters")
    goDown()
    hasFocus("Planets")
    goDown()
    goDown()
    hasFocus("Vehicles")
    goUp()
    hasFocus("Starships")
    goUp()
    cy.get("body").type("{leftarrow}")
    hasFocus("Planets")
    cy.get("body").type("{rightarrow}")
    hasFocus("Planets")
    cy.focused().click()
    cy.location("pathname").should("include", "planets")
  })
})
