import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Vacancy } from "./Vacancy";

@Entity()
export class Address {

    @PrimaryGeneratedColumn({
        type: "int"
    })
    id: number;

    // Logradouro
    @Column({
        name: "public_area"
    })
    publicArea: string;

    // Número
    @Column()
    number: string;

    // Complemento
    @Column()
    complement: string;

    // CEP
    @Column({
        type: "int",
        name: "zip_code"
    })
    zipCode: number;
   
    // Bairro
    @Column()
    district: string;

    // Cidade
    @Column()
    city: string;

    // Estado
    @Column()
    state: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}