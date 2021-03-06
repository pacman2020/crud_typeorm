import { MinLength } from "class-validator";
import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { User } from "./User";

@Entity({ name: "suggestions" })
export class Suggestion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @MinLength(4)
    title: string;

    @Column()
    description: string;

    @Column()
    user_id: number;

    @JoinColumn({name: "user_id"})
    @ManyToOne(()=> User)

    user: User

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date

    @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Date
}
