import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: "first_name"
    })
    firstName: string;

    @Column({
        name: "last_name"
    })
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ 
        default: false,
        name: "is_admin" 
    })
    isAdmin: boolean;

    @Column({
        name: "phone_number",
        nullable: true,
        default: null
    })
    phoneNumber: string;

    @Column({
        nullable: true
    })
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}