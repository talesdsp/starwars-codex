import React, { useEffect, useState } from "react"
import { RouteComponentProps } from "react-router-dom"
import { svg } from "~/assets"
import { waitButtons } from "~/utils"
import { Button, HomeWrapper, StarLogo, Window } from "./styled"

export const playLightsaberFX = () => {
  const audio: HTMLMediaElement | null = document.querySelector(
    "#lightsaberSound",
  )
  audio?.classList.add("play")
  audio?.load()
  audio?.play()
  audio?.addEventListener("ended", () => audio.classList.remove("play"))

  const video: HTMLMediaElement | null = document.querySelector(
    "#lightsaberVideo",
  )
  video?.classList.add("play")
  video?.load()
  video?.play()
  video?.addEventListener("ended", () => video.classList.remove("play"))

  return { audio, video }
}

const Home: React.FC<RouteComponentProps> = ({ history }) => {
  const [shake, setShake] = useState(false)

  useEffect(() => {
    waitButtons()
  }, [])

  const goto = (url: string) => {
    playLightsaberFX()
    setShake(true)
    setTimeout(() => {
      setShake(false)
      history.push(url)
    }, 1000)
  }

  return (
    <Window shake={shake}>
      <StarLogo src={svg.starLogo} alt="Star Wars" />
      <HomeWrapper>
        <Button onClick={() => goto("/categories")}>Start</Button>
      </HomeWrapper>
    </Window>
  )
}

export default Home
