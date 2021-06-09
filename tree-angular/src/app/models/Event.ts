import { Vacancy } from "./Vacancy";

export interface Event extends Vacancy {
  place: string;
  organizer: string;
}
