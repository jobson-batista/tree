import { Vacancy } from "./Vacancy";

export interface Job extends Vacancy {
  subType: string;
  salary: number;
}
