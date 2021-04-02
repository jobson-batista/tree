import { Column, CreateDateColumn, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Address } from "./Address";

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

    @Column({
        name: "contact_email"
    })
    contactEmail: string;

    @Column()
    qty: number;

    @OneToOne(()=> Address,{
        cascade: true,
        eager: true,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        nullable: false,
        orphanedRowAction: "delete"
    })
    @JoinColumn()
    address: Address;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}