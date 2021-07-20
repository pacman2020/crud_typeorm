import {Entity, PrimaryGeneratedColumn, Column, createConnection, CreateDateColumn, UpdateDateColumn, OneToMany} from "typeorm";
import { Suggestion } from "./Suggestion";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column({ unique: true })
    email: string;
    
    @Column()
    password: string;

    @OneToMany(() => Suggestion, suggestion => suggestion.user)
    suggestion: Suggestion[];


    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date


}
