import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class Vacancy {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    /*@Column({
        default: "Date"
    })
    startDate: Date;
    
    @Column({
        default: "Date"
    })
    endDate: Date; */

    @Column()
    contactEmail: string;

    @Column()
    qty: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}