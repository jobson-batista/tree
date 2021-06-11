import { Column, Entity } from "typeorm";
import { Vacancy } from "./Vacancy";

@Entity()
export class Event extends Vacancy {

    @Column()
    place: string;

    @Column()
    organizer: string;

    @Column()
    subType: string;
}