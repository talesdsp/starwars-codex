import React from "react"
import { Button, Item, Modal, X } from "../styled"
import { closeModal } from "../utils"

const Characters = ({ results }) => {
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
            <p>gender: {v.gender}</p>
            <p>weight: {v.mass}kg</p>
            <p>height: {v.height}cm</p>
          </Modal>
        </Item>
      ))}
    </>
  )
}

export default Characters
