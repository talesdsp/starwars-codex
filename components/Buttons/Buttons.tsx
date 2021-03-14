import { useRouter } from "next/router"
import React from "react"
import { Button, Controls, Page } from "./styled"

interface ButtonProps {
  theme: string
  page: string
  count: string | number
  next: string | null
}

const Buttons: React.FC<ButtonProps> = ({ theme, page, next, count }) => {
  const router = useRouter()

  const push = (n?: number) => {
    if (n) {
      router.push("/categories/" + theme + "/" + n)
      return
    } else {
      router.push({
        pathname: "/categories/[theme]/[page]",
        query: {
          theme: theme,
          page: Number(page) + 1,
        },
      })
      return
    }
  }

  return (
    <Controls>
      <Button off={page == "1"} onClick={() => router.back()}>
        {page == "1" ? "Go Back" : "Previous"}
      </Button>

      <Button off={next === null} onClick={() => push()}>
        Next
      </Button>

      <Page>
        {[...Array(Math.trunc(+count / 10) + (+count % 10 > 0 ? 1 : 0))].map(
          (_, i) => (
            <Button
              paginate
              tabIndex={0}
              key={i}
              onClick={() => {
                push(i + 1)
              }}
            >
              {i + 1}
            </Button>
          ),
        )}
      </Page>
    </Controls>
  )
}

export default Buttons
