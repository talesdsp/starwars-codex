export type SParams = { theme: string }

export interface SelectComponent {
  [key: string]: JSX.Element
  people: JSX.Element
  planets: JSX.Element
  vehicles: JSX.Element
  starships: JSX.Element
  species: JSX.Element
  films: JSX.Element
}

export type URL =
  | "people"
  | "planets"
  | "starships"
  | "vehicles"
  | "films"
  | "species"
