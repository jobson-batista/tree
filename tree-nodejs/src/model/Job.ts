import { Column, Entity } from "typeorm";
import { Vacancy } from "./Vacancy";

@Entity()
export class Job extends Vacancy {

    @Column()
    type: string;

    @Column({
        type: "float"
    })
    salary: number;
}