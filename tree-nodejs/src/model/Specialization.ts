import { Column, Entity } from "typeorm";
import { Vacancy } from "./Vacancy";

@Entity()
export class Specialization extends Vacancy {

    @Column()
    type: string;

    @Column()
    institution: string;

    @Column({
        type: "float"
    })
    purse: number;
}