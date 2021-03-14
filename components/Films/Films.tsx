import React from "react"
import { Button, Item, Modal, X } from "../styled"
import { closeModal } from "../utils"

const Films = ({ results }) => {
  return (
    <>
      {results.map((v, i) => (
        <Item key={i}>
          <Button>
            <h1>{v.title}</h1>
          </Button>
          <Modal>
            <X onClick={closeModal} />
            <h1>{v.title}</h1>
            <p>episode: {v.episode_id}</p>
            <p>director: {v.director}</p>
            <p>producer: {v.producer}</p>
            <p>opening crawl: {v.opening_crawl?.substring(0, 100)}...</p>
          </Modal>
        </Item>
      ))}
    </>
  )
}

export default Films
