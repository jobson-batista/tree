import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class Vacancy {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @CreateDateColumn({
        name: "start_date"
    })
    startDate: Date;
    
    @Column({
        type: 'timestamptz',
        nullable: true,
        name: "end_date",
        default: new Date()
    })
    endDate: Date;

    @Column({
        name: "contact_email"
    })
    contactEmail: string;

    @Column()
    qty: number;

    @UpdateDateColumn()
    updated_at: Date;
}