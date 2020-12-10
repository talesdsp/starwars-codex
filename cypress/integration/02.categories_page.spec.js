import { goDown, goUp, hasFocus } from "../fixtures/helpers"

context("Categories Page", () => {
  before(() => {
    cy.visit("/categories")
  })

  it("Changes focused button", () => {
    hasFocus("people")
    goDown()
    hasFocus("planets")
    goDown()
    goDown()
    hasFocus("vehicles")
    goUp()
    hasFocus("starships")
    goUp()
    cy.get("body").type("{leftarrow}")
    hasFocus("planets")
    cy.get("body").type("{rightarrow}")
    hasFocus("planets")
    cy.focused().click()
    cy.location("pathname").should("include", "planets")
  })
})
