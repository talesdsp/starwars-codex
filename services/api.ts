import { Result } from "~/pages/categories/[theme]/[page]"

export const API_URL = "https://swapi.dev/api"
export const queryRGX = /\?page=\d+/g

export async function swapi(path?: string): Promise<Result | undefined> {
  if (!path) return

  const response = await fetch(
    `${API_URL}/${path.match(queryRGX) ? path : path + "/"}`,
  )

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
