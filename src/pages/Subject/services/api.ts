import { Codex } from "../store/codex/types"

export const API_URL = "https://swapi.dev/api"
export const queryRGX = /\?page=\d+/g

export async function swapi(path?: string): Promise<Codex | undefined> {
  if (!path) return

  const response = await fetch(`${API_URL}/${path}`)

  const result = await response.json()
  return result
}

export const extractPathFromUrl = (url: string): string => {
  const rgx = /(https?:\/\/\w+\.\w+\/api\/)/g
  let extractedPath = url
  if (rgx.test(url)) {
    extractedPath = url.replace(rgx, "")
  }
  return extractedPath
}