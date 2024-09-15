import { Article } from "src/article/article.model";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column({length : 50, type: "varchar"})
    username : string

    @OneToMany(type => Article, article => article.author)
    articles : Article[]
}