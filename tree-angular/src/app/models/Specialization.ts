import { Vacancy } from "./Vacancy";

export interface Specialization extends Vacancy {
  subType: string;
  institution: string;
  scholarship: number;
}
