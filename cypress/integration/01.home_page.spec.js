import { expectPlayingMedia } from "../fixtures/helpers"

context("Home Page", () => {
  before(() => {
    cy.visit("/")
  })

  it("Starts application", () => {
    expectPlayingMedia("#theme")
  })

  it("Plays FX", () => {
    cy.get("button").click()

    cy.get("#lightsaberSound").should("have.class", "play")
    cy.get("#lightsaberVideo").should("have.class", "play")

    expectPlayingMedia("#lightsaberSound")
    expectPlayingMedia("#lightsaberVideo")
  })

  it("Navigated to categories page", () => {
    cy.location("pathname").should("include", "categories")
  })
})
