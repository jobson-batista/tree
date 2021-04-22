import { Column, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class Vacancy {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({
        name: "start_date",
        type: "timestamptz",
        nullable: true,
        default: new Date()

    })
    startDate: Date;
    
    @Column({
        name: "end_date",
        type: 'timestamptz',
        nullable: true,
        default: addDays(30)
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

function addDays(days: number){
    let now = new Date();
    return new Date(now.setDate(now.getDate() + days));
}