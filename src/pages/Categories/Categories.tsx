import React, { useEffect } from "react"
import { RouteComponentProps } from "react-router-dom"
import { waitButtons } from "~/utils"
import { URL } from "../types"
import { Button, Item, List, Window } from "./styled"

const Categories: React.FC<RouteComponentProps> = ({ history }) => {
  useEffect(() => {
    waitButtons()
  }, [])

  return (
    <Window>
      <List>
        <ButtonsList history={history} />

        <Item>
          <Button off onClick={() => history.push("/")}>
            Go Back
          </Button>
        </Item>
      </List>
    </Window>
  )
}
export default Categories

function ButtonsList({ history }) {
  const goto = (url: URL) => {
    return () => history.push(`/categories/${url}`)
  }

  const subjects: URL[] = [
    "people",
    "planets",
    "starships",
    "vehicles",
    "films",
    "species",
  ]

  const render = subjects.map((sub) => (
    <Item key={sub}>
      <Button onClick={goto(sub)}>{sub}</Button>
    </Item>
  ))

  return <>{render}</>
}
