import React from "react"
import { audio, video } from "~/assets/index"

const Audios: React.FC = () => {
  React.useEffect(() => {
    const soundTrack: HTMLMediaElement | null = document.querySelector("#theme")
    soundTrack?.load()
    soundTrack?.play()

    const audio: HTMLMediaElement | null = document.querySelector(
      "#lightsaberMove",
    )
    audio?.load()
  }, [])

  return (
    <>
      <audio loop id="theme">
        <source src={audio.ogg} type="audio/ogg" />
        <source src={audio.mp3} type="audio/mpeg" />
      </audio>

      <audio id="lightsaberSound">
        <source src={audio.lightsaberOGG} type="audio/ogg" />
        <source src={audio.lightsaberMP3} type="audio/mpeg" />
      </audio>

      <video id="lightsaberVideo">
        <source
          src={video.lightning}
          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
        />
      </video>

      <audio id="lightsaberMove">
        <source src={audio.lightsaberMoveOGG} type="audio/ogg" />
        <source src={audio.lightsaberMoveMP3} type="audio/mpeg" />
      </audio>
    </>
  )
}

export default Audios
