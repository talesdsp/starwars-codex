import "styled-components"
declare module "*.png"
declare module "*.svg"
declare module "*.mp3"
declare module "*.mp4"
declare module "*.ogg"
// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string
    colors: {
      main: string
      secondary: string
    }
  }
}
