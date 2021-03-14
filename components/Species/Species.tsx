import React from "react"
import { Button, Item, Modal, X } from "../styled"
import { closeModal } from "../utils"

const Species = ({ results }) => {
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
            <p>classification: {v.classification}</p>
            <p>designation: {v.designation}</p>
            <p>language: {v.language}</p>
            <p>average_height: {v.average_height}</p>
            <p>average_lifespan: {v.average_lifespan}</p>
          </Modal>
        </Item>
      ))}
    </>
  )
}

export default Species
