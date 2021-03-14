import React from "react"
import styled, { keyframes } from "styled-components"
import styles from "./stars.module.scss"

const Stars: React.FC = () => (
  <>
    <Star className={`${styles.layer1}`}>
      <div />
    </Star>

    <Star className={`${styles.layer1} ${styles.a}`}>
      <div />
    </Star>

    <Star className={`${styles.layer2}`}>
      <div />
    </Star>

    <Star className={`${styles.layer2} ${styles.a}`}>
      <div />
    </Star>

    <Star className={`${styles.layer3}`}>
      <div />
    </Star>

    <Star className={`${styles.layer3} ${styles.a}`}>
      <div />
    </Star>
  </>
)

export default Stars

const rotateStars = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

interface IStarProps {
  layer1?: boolean
  layer1A?: boolean
  layer2?: boolean
  layer2A?: boolean
  layer3?: boolean
  layer3A?: boolean
}

const Star = styled.div<IStarProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  animation-name: ${rotateStars};
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  div {
    border-radius: 50%;
  }
`
