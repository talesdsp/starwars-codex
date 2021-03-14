import React from "react"
import { Button, Item, Modal, X } from "../styled"
import { closeModal } from "../utils"

const Starships = ({ results }) => {
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
            <p>model: {v.model}</p>
            <p>manufacturer: {v.manufacturer}</p>
            <p>passengers: {v.passengers}</p>
            <p>pilots: {v.pilots}</p>
            <p>cost_in_credits: {v.cost_in_credits}</p>
          </Modal>
        </Item>
      ))}
    </>
  )
}

export default Starships
