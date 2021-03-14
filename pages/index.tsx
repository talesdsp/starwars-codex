import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { svg } from "~/assets"
import {
  globalButton,
  globalItem,
  globalList,
  globalWindow,
} from "~/global-styled"
import { waitButtons } from "~/utils"

export const Window = styled(globalWindow)``

export const List = styled(globalList)``
export const Item = styled(globalItem)``
export const Button = styled(globalButton)``

export const HomeWrapper = styled.div`
  width: 100%;
  background: blue;
  margin: 0 auto 8rem;
  @media (min-width: 768px) {
    width: 40%;
  }
`

export const StarLogo = styled.img`
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
`

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

const Home = () => {
  const [shake, setShake] = useState(false)
  const router = useRouter()

  useEffect(() => {
    waitButtons()
  }, [])

  const goto = (url: string) => {
    playLightsaberFX()
    setShake(true)
    setTimeout(() => {
      setShake(false)
      router.push(url)
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
