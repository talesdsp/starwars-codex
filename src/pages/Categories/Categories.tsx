import React, { useEffect } from "react"
import { RouteComponentProps } from "react-router-dom"
import { waitButtons } from "~/utils"
import { URL } from "../types"
import { Button, Item, List, Window } from "./styled"

const Categories: React.FC<RouteComponentProps> = ({ history }) => {
  useEffect(() => {
    waitButtons()
  }, [])

  const goto = (url: URL) => {
    history.push(`/categories/${url}`)
  }

  return (
    <Window>
      <List>
        <Item>
          <Button onClick={() => goto("people")}>Characters</Button>
        </Item>
        <Item>
          <Button onClick={() => goto("planets")}>Planets</Button>
        </Item>
        <Item>
          <Button onClick={() => goto("starships")}>Starships</Button>
        </Item>
        <Item>
          <Button onClick={() => goto("vehicles")}>Vehicles</Button>
        </Item>
        <Item>
          <Button onClick={() => goto("films")}>Films</Button>
        </Item>
        <Item>
          <Button onClick={() => goto("species")}>Species</Button>
        </Item>
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
