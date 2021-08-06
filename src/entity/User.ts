import { IsEmail, MinLength } from "class-validator";
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany} from "typeorm";

@Entity({ name: 'users' })
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @MinLength(5)
    username: string;

    @Column({ unique: true })
    @IsEmail()
    email: string;
    
    @Column()
    password: string;

    @Column({ default: false })
    admin: boolean;

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date

    @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Date

}
