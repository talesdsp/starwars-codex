import React from "react"
import { Button, Item, Modal, X } from "../styled"
import { closeModal } from "../utils"

const Planets = ({ results }) => {
  return (
    <>
      {results.map((v, i) => (
        <Item key={i}>
          <Button>
            <h1>{v.name}</h1>
          </Button>
          <Modal>
            <X onClick={closeModal} />
            <h1>{v.name}</h1>
            <p>terrain: {v.terrain}</p>
            <p>climate: {v.climate}</p>
            <p>population: {v.population}</p>
            <p>orbital period: {v.orbital_period}</p>
            <p>gravity: {v.gravity}</p>
          </Modal>
        </Item>
      ))}
    </>
  )
}
export default Planets
