import { MouseEventHandler } from "react"

export const closeModal: MouseEventHandler<Node> = (ev) => {
  ;(ev.target as Node).parentElement?.removeAttribute("data-preview")
}
