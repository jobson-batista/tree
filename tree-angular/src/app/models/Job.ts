import { Vacancy } from "./Vacancy";

export interface Job extends Vacancy {
  type: string;
  salary: number;
}
