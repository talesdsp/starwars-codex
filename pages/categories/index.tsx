import { useRouter } from "next/router"
import React, { useEffect } from "react"
import styled from "styled-components"
import {
  globalButton,
  globalItem,
  globalList,
  globalWindow,
} from "~/global-styled/index"
import { URL } from "~/types"
import { waitButtons } from "~/utils"

const Window = styled(globalWindow)``
const List = styled(globalList)``
const Item = styled(globalItem)``
const Button = styled(globalButton)``

const Categories: React.FC<any> = ({}) => {
  const router = useRouter()

  useEffect(() => {
    waitButtons()
  }, [])

  return (
    <Window>
      <List>
        <ButtonsList history={router} />

        <Item>
          <Button off onClick={() => router.push("/")}>
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
    return () => history.push(`/categories/${url}/1`)
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
