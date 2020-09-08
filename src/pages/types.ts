import { RouteComponentProps } from "react-router-dom"

export type CategoriesProps = RouteComponentProps

export type HomeProps = RouteComponentProps

export type SParams = { theme: string }
export type SubjectProps = RouteComponentProps<SParams>

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
