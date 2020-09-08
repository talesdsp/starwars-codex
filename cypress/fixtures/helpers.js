export const expectPlayingMedia = (selector) => {
  let audible = false
  cy.get(selector).should((jquery) => {
    let el = jquery[0]

    if (el.duration > 0 && !el.paused && !el.muted) audible = true

    expect(audible).to.eq(true)
  })
}

export const goUp = () => {
  cy.get("body").type("{uparrow}")
}

export const goDown = () => {
  cy.get("body").type("{downarrow}")
}

export const hasFocus = (text) => {
  cy.focused().should("have.text", text)
  return cy.focused()
}
