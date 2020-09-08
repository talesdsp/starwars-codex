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
