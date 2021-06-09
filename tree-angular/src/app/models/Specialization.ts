import { Vacancy } from "./Vacancy";

export interface Specialization extends Vacancy {
  type: string;
  institution: string;
  scholarship: number;
}
