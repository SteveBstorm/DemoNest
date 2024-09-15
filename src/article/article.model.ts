import { User } from "src/user/user.model";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id : number

    @ManyToOne(() => User, user => user.articles)
    author: User

    @Column()
    content : string
}