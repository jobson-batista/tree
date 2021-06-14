import { Column, Entity } from "typeorm";
import { Vacancy } from "./Vacancy";

@Entity()
export class Event extends Vacancy {

    @Column({nullable: true})
    place: string;

    @Column({nullable: true})
    organizer: string;

    // @Column()
    // subType: string;
}