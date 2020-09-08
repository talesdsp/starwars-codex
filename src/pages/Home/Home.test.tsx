// @ts-nocheck
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import * as React from "react"
import Home, { playLightsaberFX } from "./Home"

jest.mock("~/utils")
jest.mock("~/assets")

const stateSetter: React.Dispatch<unknown> = jest.fn()

const use_state = jest
  .spyOn(React, "useState")
  .mockImplementation((stateValue) => [stateValue, stateSetter])

const use_effect = jest.spyOn(React, "useEffect")

const history = {
  push: jest.fn((url) => url),
}
const use_history = jest.spyOn(history, "push")

describe("Home.tsx", () => {
  let result: { container: HTMLElement }

  beforeEach(async () => {
    result = render(<Home history={history} />)
  })

  it("render component correctly", () => {
    expect(result.container).toMatchSnapshot()
  })

  it("initialize component", () => {
    expect(use_effect).toBeCalled()
    expect(use_state).toBeCalled()
  })

  it("trigger onClick handler", () => {
    const button = screen.getByText("Start")
    fireEvent.click(button)

    expect(stateSetter).toBeCalledTimes(1)
    expect(setTimeout).toBeCalled()
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000)
  })

  jest.useFakeTimers()
  it("waits 1 second to update state and navigate page", () => {
    jest.advanceTimersByTime(1000)

    expect(stateSetter).toBeCalledTimes(2)
    expect(use_history).toBeCalledTimes(1)
  })
})

describe("playLightsaberFX()", () => {
  document.body.innerHTML = `<div><audio id="lightsaberSound"></audio>'+'<video id="lightsaberVideo"><source type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/></video></div>`

  it("play sound and video", () => {
    const { audio, video } = playLightsaberFX()
    expect(audio).toHaveClass("play")
    expect(video).toHaveClass("play")
  })

  it("remove class on ended event", () => {
    const { audio, video } = playLightsaberFX()

    audio && fireEvent.ended(audio)
    video && fireEvent.ended(video)

    expect(audio).not.toHaveClass("play")
    expect(video).not.toHaveClass("play")
  })

  it("both audio and video are null", () => {
    document.body.innerHTML = ""
    const { audio, video } = playLightsaberFX()

    expect(audio).toBeNull()
    expect(video).toBeNull()
  })
})
