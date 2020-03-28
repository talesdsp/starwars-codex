import { RouteComponentProps } from "react-router-dom";

export interface NavigationProps {
  fn: void;
}

export type CategoriesProps = NavigationProps & RouteComponentProps;

export interface HomeProps extends NavigationProps, RouteComponentProps {
  start: Function;
}

export type SParams = { theme: string };
export type SubjectProps = RouteComponentProps<SParams> & NavigationProps;

export interface SelectComponent {
  [key: string]: JSX.Element;
  people: JSX.Element;
  planets: JSX.Element;
  vehicles: JSX.Element;
  starships: JSX.Element;
  species: JSX.Element;
  films: JSX.Element;
}
