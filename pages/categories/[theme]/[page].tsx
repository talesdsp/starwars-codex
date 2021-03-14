import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import styled, { keyframes } from "styled-components"
import {
  Buttons,
  Characters,
  Films,
  Planets,
  Species,
  Starships,
  Vehicles,
} from "~/components"
import {
  globalButton,
  globalItem,
  globalList,
  globalWindow,
} from "~/global-styled/index"
import { swapi } from "~/services/api"
import { SelectComponent } from "~/types"
import { waitButtons } from "~/utils"

export const Window = styled(globalWindow)``
export const List = styled(globalList)``
export const Item = styled(globalItem)``
export const Button = styled(globalButton)``
export const Role = styled.h1`
  font-size: 3rem;
  color: #fff;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  background-color: #03121a;
  padding: 3rem 0;
`

const rotate360 = keyframes`
  0%{
    transform: rotate(0deg);
  }

  100%{
    transform: rotate(720deg)
  }
`

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 2;
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid #ffe81f;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`

type SubjectProps = InferGetStaticPropsType<typeof getStaticProps>

const Subject: NextPage<SubjectProps> = ({ results }) => {
  const router = useRouter()

  const theme = router.query.theme
  const page = router.query.page

  useEffect(() => {
    waitButtons()
  }, [results])

  const Which = () => {
    const selectedComponent: SelectComponent = {
      people: <Characters results={results.results} />,
      planets: <Planets results={results.results} />,
      vehicles: <Vehicles results={results.results} />,
      starships: <Starships results={results.results} />,
      species: <Species results={results.results} />,
      films: <Films results={results.results} />,
    }

    return selectedComponent[theme + ""]
  }

  if (router.isFallback) return <Spinner />

  return (
    <>
      <Role>{theme}</Role>

      <List>{results && Which()}</List>

      <Buttons
        count={results.count}
        next={results.next}
        theme={theme + ""}
        page={page + ""}
      />
    </>
  )
}
export default Subject

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export type Result = {
  count: number
  next: string | null
  previous: string | null
  results: ICharacters | IStarships | IPlanets | ISpecies | IFilms | IVehicles[]
}

export const getStaticProps: GetStaticProps<
  {
    results: Result
  },
  { theme: string; page: string }
> = async (ctx) => {
  let url

  if (ctx.params.page != null)
    url = `${ctx.params.theme}/?page=${ctx.params.page}`
  else url = `${ctx.params.theme}`

  const results = await swapi(url)

  return {
    props: {
      results,
    },
  }
}

export type Character = React.FC<Subject<ICharacters>>
export type Starship = React.FC<Subject<IStarships>>
export type Planet = React.FC<Subject<IPlanets>>
export type Specie = React.FC<Subject<ISpecies>>
export type Film = React.FC<Subject<IFilms>>
export type Vehicle = React.FC<Subject<IVehicles>>

interface Subject<T> {
  results: T[]
}

export interface ICharacters {
  readonly name: string
  readonly mass: string
  readonly height: string
  readonly hair_color: string
  readonly skin_color: string
  readonly eye_color: string
  readonly birth_year: string
  readonly gender: string
  readonly homeworld: string
  readonly films: string[]
  readonly species: string[]
  readonly vehicles: string[]
  readonly starships: string[]
  readonly created: string
  readonly edited: string
  readonly url: string
}

export interface IStarships {
  readonly MGLT: string
  readonly cargo_capacity: string
  readonly consumables: string
  readonly cost_in_credits: string
  readonly created: string
  readonly crew: string
  readonly edited: string
  readonly hyperdrive_rating: string
  readonly length: string
  readonly manufacturer: string
  readonly max_atmosphering_speed: string
  readonly model: string
  readonly name: string
  readonly passengers: string
  readonly films: string[]
  readonly pilots: string[]
  readonly starship_class: string
  readonly url: string
}

export interface IPlanets {
  readonly climate: string
  readonly created: string
  readonly diameter: string
  readonly edited: string
  readonly films: string[]
  readonly gravity: string
  readonly name: string
  readonly orbital_period: string
  readonly population: string
  readonly residents: string[]
  readonly rotation_period: string
  readonly surface_water: string
  readonly terrain: string
  readonly url: string
}

export interface ISpecies {
  readonly average_height: string
  readonly average_lifespan: string
  readonly classification: string
  readonly created: string
  readonly designation: string
  readonly edited: string
  readonly eye_colors: string
  readonly hair_colors: string
  readonly homeworld: string
  readonly language: string
  readonly name: string
  readonly people: string[]
  readonly films: string[]
  readonly skin_colors: string
  readonly url: string
}

export interface IFilms {
  readonly title: string
  readonly episode_id: number
  readonly director: string
  readonly producer: string
  readonly opening_crawl: string
  readonly characters: string[]
  readonly created: string
  readonly edited: string
  readonly planets: string[]
  readonly release_date: string
  readonly species: string[]
  readonly starships: string[]
  readonly url: string
  readonly vehicles: string[]
}

export interface IVehicles {
  readonly cargo_capacity: string
  readonly consumables: string
  readonly cost_in_credits: string
  readonly created: any
  readonly crew: string
  readonly edited: any
  readonly length: string
  readonly manufacturer: string
  readonly max_atmosphering_speed: string
  readonly model: string
  readonly name: string
  readonly passengers: string
  readonly pilots: string[]
  readonly films: string[]
  readonly url: string
  readonly vehicle_class: string
}
